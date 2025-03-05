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
import { updateCouponUsage } from "@/utils/helpers/updateCouponUsage";

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

// Add validation utilities at the top of the file
const validateScheduledDelivery = (scheduledDelivery: {
  date: string;
  time: string;
}) => {
  const now = new Date();
  const selectedDateTime = new Date(
    `${scheduledDelivery.date} ${scheduledDelivery.time}`
  );

  // Check if time is at least 1 hour in future
  const hoursDiff =
    (selectedDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);
  if (hoursDiff < 1) {
    throw new Error("Pre-orders must be scheduled at least 1 hour in advance");
  }

  // Check if date is not more than 30 days in advance
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
  if (selectedDateTime > thirtyDaysFromNow) {
    throw new Error("Orders cannot be scheduled more than 30 days in advance");
  }
};

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
    console.log("Received order data:", body); // Debug log

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

    // Validate scheduled delivery for pre-orders
    if (existingCart.orderType === "pre-order") {
      if (
        !existingCart.scheduledDelivery?.date ||
        !existingCart.scheduledDelivery?.time
      ) {
        return NextResponse.json(
          {
            error:
              "Scheduled delivery date and time are required for pre-orders",
          },
          { status: 400 }
        );
      }

      try {
        validateScheduledDelivery(existingCart.scheduledDelivery);
      } catch (error) {
        return NextResponse.json(
          {
            error:
              error instanceof Error
                ? error.message
                : "Invalid delivery schedule",
          },
          { status: 400 }
        );
      }
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

    // Log the cart data for debugging
    console.log("Cart data:", {
      existingCart: existingCart,
      coupon: existingCart.coupon,
    });

    // Calculate fees and discounts
    const baseDeliveryFee = body.deliveryFee || 0;
    const deliveryDiscount =
      existingCart.coupon?.mode === "delivery"
        ? existingCart.coupon.discount
        : 0;
    const finalDeliveryFee = Math.max(0, baseDeliveryFee - deliveryDiscount);
    const itemDiscount =
      existingCart.coupon?.mode !== "delivery"
        ? existingCart.coupon?.discount || 0
        : 0;

    // Create order data with proper handling for pickup/delivery
    const orderData = {
      orderItems: existingCart.cartItems,
      type: "cart",
      email: user.email,
      phone: user.phone,
      address: user.address,
      total: totalAmount - itemDiscount + finalDeliveryFee,
      user: user._id,
      baseDeliveryFee: baseDeliveryFee,
      deliveryFee: finalDeliveryFee,
      paymentId: body.referenceId,
      deliveryMethod: body.deliveryMethod,
      selectedRegion: body.deliveryMethod === 'pickup' ? 'Vendor Location' : body.selectedRegion,
      pickupLocation: body.deliveryMethod === 'pickup' ? 'Vendor Location' : undefined,
      orderType: body.orderType || 'instant',
      scheduledDelivery: body.scheduledDelivery || null,
      infoPass: body.infoPass,
      coupon: body.couponInfo && Object.keys(body.couponInfo).length > 0 ? body.couponInfo : null
    };

    // Remove undefined or empty values
    Object.keys(orderData).forEach(key => {
      if (orderData[key] === undefined || orderData[key] === null) {
        delete orderData[key];
      }
    });

    console.log("Order data being saved:", orderData);

    const order = new Order(orderData);

    try {
      await order.save();
      console.log("Order saved successfully", order);

      // Update coupon usage if a coupon was used
      if (order.coupon?.couponId) {
        try {
          await updateCouponUsage({
            couponId: order.coupon.couponId,
            userId: user._id,
            orderId: order._id,
            orderTotal: totalAmount,
            discountAmount: order.coupon.discount,
          });
          console.log("Coupon usage updated successfully");
        } catch (error) {
          console.error("Failed to update coupon usage:", error);
          // Don't fail the order if coupon update fails
        }
      }
    } catch (saveError) {
      console.error("Order save error:", {
        error: saveError,
        data: orderData,
        cart: existingCart,
      });
      return NextResponse.json(
        { error: "Failed to save order", details: saveError.message },
        { status: 400 }
      );
    }

    // After saving the order, send notifications to vendors
    for (const item of existingCart.cartItems) {
      if (item.vendor?.phone) {
        const vendorMessage = `
New ${order.orderType.toUpperCase()} order received!
Item: ${item.title}
Quantity: ${item.quantity}
Customer: ${user.firstName} ${user.lastName}
Contact: ${user.phone}
Delivery to: ${body.selectedRegion}
${
  order.orderType === "pre-order"
    ? `
Scheduled for: ${order.scheduledDelivery.date} at ${order.scheduledDelivery.time}`
    : ""
}
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

    // Update email templates with discount information
    const emailTemplateName =
      order.type === "cart" ? "cartFoodOrder" : "sessionFoodOrder";

    // Helper function to format coupon text consistently
    const formatCouponText = (coupon: any) => {
      if (!coupon || !coupon.code) return '';
      return `${coupon.code} - ₦${coupon.discount} off${coupon.mode ? ` (${coupon.mode})` : ''}`;
    };

    try {
      // Prepare coupon text once for both emails
      const couponText = formatCouponText(existingCart.coupon);

      // Customer email
      const emailData = {
        to: user.email,
        subject: "Order Confirmed",
        template: emailTemplateName,
        replacements: {
          customerName: `${user.firstName}`,
          orderItems: formattedOrderItems,
          amount: totalAmount.toString(),
          baseDeliveryFee: baseDeliveryFee.toString(),
          deliveryFee: finalDeliveryFee.toString(),
          deliveryDiscount: deliveryDiscount.toString(),
          itemDiscount: itemDiscount.toString(),
          total: order.total,
          estimatedDeliveryTime:
            order.orderType === "pre-order"
              ? `${order.scheduledDelivery.date} at ${order.scheduledDelivery.time}`
              : "30 - 45 minutes",
          deliveryMethod: order.deliveryMethod.toUpperCase(), // Add this line
          selectedRegion:
            order.deliveryMethod === "pickup"
              ? "Pickup at vendor location"
              : body.selectedRegion,
          orderType: order.orderType.toUpperCase(),
          scheduledDelivery:
            order.orderType === "pre-order"
              ? `${order.scheduledDelivery.date} at ${order.scheduledDelivery.time}`
              : "Not Applicable",
          couponText: couponText || '-', // Use dash if no coupon
        },
      };

      console.log("Email data prepared:", emailData); // Add this log
      await sendEmail(emailData);
      console.log("Customer email sent successfully");

      // Admin email
      await sendEmail({
        to: ["ibrahim.saliman.zainab@gmail.com", "Mickeyterian@gmail.com"].join(", "),
        subject: "New Order Notification",
        template: "adminOrderNotify",
        replacements: {
          customerFullName: `${user.firstName} ${user.lastName}`,
          orderNumber: body.referenceId,
          itemsOrdered: formattedOrderItems,
          amount: totalAmount.toString(),
          deliveryFee: order?.deliveryFee?.toString() || "0",
          partnerFullName: vendorNames || "Not assigned",
          total: order.total,
          customerAddress: `${user.address || ''}, ${user.lga || ''}, ${user.state || ''}`,
          customerPhone: user.phone,
          orderTimestamp: moment(order.createdAt).format("MMMM D, YYYY, h:mm a"),
          deliveryMethod: order.deliveryMethod?.toUpperCase() || 'N/A',
          selectedRegion: order.deliveryMethod === "pickup" 
            ? "Pickup at vendor location" 
            : (body.selectedRegion || 'N/A'),
          orderType: order.orderType?.toUpperCase() || 'INSTANT',
          scheduledDelivery: order.orderType === "pre-order" 
            ? `${order.scheduledDelivery.date} at ${order.scheduledDelivery.time}`
            : null,
          couponText: couponText || '-', // Use dash if no coupon
        },
      });
      console.log("Admin email sent successfully to multiple recipients");
    } catch (emailError) {
      console.error("Failed to send emails:", emailError);
    }

    // Create vendors string from cart items
    const vendorNames = existingCart.cartItems
      .map((item) => item.vendor?.name)
      .filter(Boolean)
      .join(", ");

    // Clear the cart after successful order processing
    const cartUpdateResult = await Cart.findOneAndUpdate(
      { user: user._id },
      {
        $set: {
          cartItems: [],
          total: 0,
          orderType: "instant",
          scheduledDelivery: null,
          coupon: null,
          deliveryInfo: { region: null, fee: null },
        },
      },
      { new: true }
    );

    if (!cartUpdateResult) {
      console.error("Failed to clear cart after order");
    } else {
      console.log("Cart cleared successfully after order");
    }

    return NextResponse.json(
      {
        order,
        message: "Order placed successfully",
        success: true,
        cartCleared: !!cartUpdateResult,
      },
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
