import { closeDB, connectDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import sendEmail from "@/utils/sendSmtpMail"; 
import moment from "moment";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/utils/helpers/authOptions";

interface CartItem {
  title: string;
  quantity: number;
  total: number;
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

    // Create a new order object with all required fields
    const order = new Order({
      orderItems: existingCart.cartItems,
      type: "cart", 
      email: user.email,
      phone: user.phone,
      address: user.address,
      total: body.amount,
      user,
      deliveryFee: body.deliveryFee,
      paymentId: body.referenceId,
    });

    // Save the new order to the database
    await order.save();
    console.log("Order saved successfully", order);


    // Format the order items for the email template
    const formattedOrderItems = existingCart.cartItems.map((item: CartItem) => {
      return `<li>${item.title} - ${item.quantity} - ₦${item.total}</li>`;
    }).join('');  // Join the array to create an HTML list

    // Send confirmation email to the customer
    const emailTemplateName = order.type === "cart" ? "cartFoodOrder" : "sessionFoodOrder";

    try {
      console.log("Attempting to send customer email...");
      await sendEmail({
        to: user.email,
        subject: "Order Confirmed",
        template: emailTemplateName,
        replacements: {
          customerName: `${user.firstName}`,
          orderItems: formattedOrderItems,
          amount: existingCart?.total.toString(),
          deliveryFee: order?.deliveryFee.toString(),
          total: order.total + order.deliveryFee,
          estimatedDeliveryTime: "30 - 45 minutes",  // Can be customized dynamically
        },
      });
      console.log("Customer email sent successfully");
    } catch (error) {
      console.error("Error sending customer email:", error);
    }

    try {
      console.log("Attempting to send admin email...");
      await sendEmail({
        to: "ibrahim.saliman.zainab@gmail.com",
        subject: "New Order Notification",
        template: "adminOrderNotify",
        replacements: {
          customerFullName: `${user.firstName} ${user.lastName}`,
          orderNumber: body.referenceId,
          itemsOrdered: formattedOrderItems,
          amount: existingCart?.total.toString(),
          deliveryFee: order?.deliveryFee.toString(),
          partnerFullName: `un-assigned`,
          total: order.total + order.deliveryFee,
          customerAddress: `${user.address}, ${user.lga}, ${user.state}`,
          customerPhone: user.phone,
          orderTimestamp: moment(order.createdAt).format("MMMM D, YYYY, h:mm a"),
        },
      });
      console.log("Admin email sent successfully");
    } catch (error) {
      console.error("Error sending admin email:", error);
    }

    // Step 12: Clear the cart after order is processed
    existingCart.cartItems = [];
    existingCart.total = 0;
    await existingCart.save();
    console.log("Cart cleared after order");

    //  Return a order and success response
    // return NextResponse.json({ message: "Order placed successfully", success: true });
    // return NextResponse.json({ order, message: "Order placed successfully", success: true });
    return NextResponse.json({ order, message: "Order placed successfully", success: true }, { status: 201 });

  } catch (err) {
    // Step 14: Handle and log any errors
    console.error("Error:", err);
    return NextResponse.json({ error: "An error occurred", err }, { status: 500 });
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
