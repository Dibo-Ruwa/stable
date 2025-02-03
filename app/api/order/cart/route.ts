import { closeDB, connectDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import sendEmail from "@/utils/sendSmtpMail";
import moment from "moment";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/utils/helpers/authOptions";
import { sendWhatsAppNotification } from "@/utils/services/whatsapp";

interface CartItem {
  title: string;
  quantity: number;
  price: number;
  extras: Extra[];
}

interface Extra {
  title: string;
  price: number;
  quantity: number;
}

export async function POST(req: Request, res: Response) {
  try {
    // Connect to the database
    await connectDB();

    // Check if the request body exists
    if (!req.body) {
      console.error("Request body is missing");
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    }

    const body = await req.json();

    // Get the user session
    const session = await getServerSession(authOptions);
    if (!session) {
      console.error("User is not logged in");
      return NextResponse.json({ message: "You are not logged in" });
    }

    // Find the user in the database
    const user = await User.findById(session.user._id);
    if (!user) {
      console.error("User not found in database");
      return NextResponse.json({ message: "User does not exist" });
    }

    // Find the cart associated with the user
    const existingCart = await Cart.findOne({ user: user._id });
    if (!existingCart) {
      console.error("Cart not found for user");
      return NextResponse.json({ error: "Cart not found" }, { status: 400 });
    }

    // Calculate the total amount including extras
    const totalAmount = existingCart.cartItems.reduce((acc, item) => {
      const itemTotal = item.price * item.quantity;
      const extrasTotal = item.extras.reduce(
        (extraAcc, extra) => extraAcc + extra.price * extra.quantity,
        0
      );
      return acc + itemTotal + extrasTotal;
    }, 0);

    // Create a new order object with all required fields
    const order = new Order({
      orderItems: existingCart.cartItems,
      type: "cart",
      email: user.email,
      phone: user.phone,
      address: user.address,
      total: totalAmount + body.deliveryFee,
      user,
      deliveryFee: body.deliveryFee,
      paymentId: body.referenceId,
      selectedRegion: body.selectedRegion, // Include selected region
    });

    // Save the new order to the database
    await order.save();
    console.log("Order saved successfully", order);

    // After saving the order, send notifications to vendors
    for (const item of existingCart.cartItems) {
      if (item.vendor?.phone) {
        const vendorMessage = `
New order received!
Item: ${item.title}
Quantity: ${item.quantity}
Customer: ${user.firstName} ${user.lastName}
Contact: ${user.phone}
Delivery to: ${body.selectedRegion}
${
  item.extras?.length
    ? `Extras: ${item.extras
        .map((e) => `${e.title} (x${e.quantity})`)
        .join(", ")}`
    : ""
}
Total: ₦${
          item.price * item.quantity +
          (item.extras?.reduce((acc, e) => acc + e.price * e.quantity, 0) || 0)
        }
`;

        try {
          const whatsappResult = await sendWhatsAppNotification(
            item.vendor.phone,
            vendorMessage
          );
          if (whatsappResult.status === "error") {
            console.log(
              `WhatsApp notification failed for vendor ${item.vendor.name}:`,
              whatsappResult.error
            );
          } else {
            console.log(
              `WhatsApp notification sent to vendor: ${item.vendor.name}`
            );
          }
        } catch (error) {
          // Just log the error and continue
          console.error(
            `Failed to send WhatsApp notification to vendor: ${item.vendor.name}`,
            error
          );
        }
      }
    }

    // Format the order items for the email template
    const formattedOrderItems = existingCart.cartItems
      .map((item: CartItem) => {
        const itemTotal = item.price * item.quantity;
        const extras = item.extras
          .map(
            (extra) =>
              `${extra.title} (x${extra.quantity}) - ₦${
                extra.price * extra.quantity
              }`
          )
          .join(", ");
        return `<li>${item.title} - ${item.quantity} - ₦${itemTotal} ${
          extras ? `- Extras: ${extras}` : ""
        }</li>`;
      })
      .join(""); // Join the array to create an HTML list

    // Send confirmation email to the customer
    const emailTemplateName =
      order.type === "cart" ? "cartFoodOrder" : "sessionFoodOrder";

    try {
      console.log("Attempting to send customer email...");
      await sendEmail({
        to: user.email,
        subject: "Order Confirmed",
        template: emailTemplateName,
        replacements: {
          customerName: `${user.firstName}`,
          orderItems: formattedOrderItems,
          amount: totalAmount.toString(),
          deliveryFee: order?.deliveryFee.toString(),
          total: order.total,
          estimatedDeliveryTime: "30 - 45 minutes",
          selectedRegion: body.selectedRegion,
        },
      });
      console.log("Customer email sent successfully");
    } catch (error) {
      console.error("Error sending customer email:", error);
    }

    try {
      console.log("Attempting to send admin email...");
      // Get unique vendor names from cart items
      const vendorNames = [...new Set(existingCart.cartItems.map(item => item.vendor.name))];
      const partnersString = vendorNames.join(', ');

      await sendEmail({
        to: ["ibrahim.saliman.zainab@gmail.com", "Mickeyterian@gmail.com"].join(", "),
        subject: "New Order Notification",
        template: "adminOrderNotify",
        replacements: {
          customerFullName: `${user.firstName} ${user.lastName}`,
          orderNumber: body.referenceId,
          itemsOrdered: formattedOrderItems,
          amount: totalAmount.toString(),
          deliveryFee: order?.deliveryFee.toString(),
          partnerFullName: partnersString, // Use vendor names instead of "un-assigned"
          total: order.total,
          customerAddress: `${user.address}, ${user.lga}, ${user.state}`,
          customerPhone: user.phone,
          orderTimestamp: moment(order.createdAt).format(
            "MMMM D, YYYY, h:mm a"
          ),
          selectedRegion: body.selectedRegion, // Include selected region
        },
      });
      console.log("Admin email sent successfully to multiple recipients");
    } catch (error) {
      console.error("Error sending admin email:", error);
    }

    // Clear the cart after order is processed
    existingCart.cartItems = [];
    existingCart.total = 0;
    await existingCart.save();
    console.log("Cart cleared after order");

    // Return a order and success response
    return NextResponse.json(
      { order, message: "Order placed successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    // Handle and log any errors
    console.error("Error:", err);
    return NextResponse.json(
      { error: "An error occurred", err },
      { status: 500 }
    );
  } finally {
    console.log("Order processing complete");
  }
}

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const orders = await Order.find({ user: user._id });

    if (!orders) {
      return NextResponse.json({ message: "No orders found" });
    }

    return NextResponse.json({ orders, success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    console.log("Final");
  }
}
