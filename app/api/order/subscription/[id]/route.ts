import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Subscription } from "@/utils/models/Subscription";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import sendEmail, { resend } from "@/utils/resend";
import SubscriptionConfirmation from "@/emails/SubscriptionOrder";
import moment from "moment";

import { AdminOrderNotificationComponent } from "@/emails";
import OrderConfirmation, { SessionConfirmation } from "@/emails/FoodOrder";


export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    let order;

    const id = params.id;

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const subscription = await Subscription.findByIdAndUpdate(
      id,
      { isPaid: true },
      { new: true }
    );

    if (!subscription) {
      // If no existing Subscription,throw new error
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    } else {
      // If an existing Subscription is found, check if the item exists
      order = new Order({
        orderItems: subscription,
        type: "session",
        email: user.email,
        phone: user.phone,
        total: subscription.total,
        address: user.address,
        user,
        paymentId: body.referenceId,
      });

      await order.save();

     console.log(order.orderItems)

      await sendEmail(
        user.email,
        "Booking Confirmed",
        SessionConfirmation({
          customerName: user.firstName,
          orderId: order.paymentId,
          orderItem: {
            orderItems: order.orderItems,
            estimatedDeliveryTime: "witin the next two days(we'll call to confirm your exact time)",
          },
          contactNumber: "+2348059303261"
        })
      );

      await sendEmail(
        "ibrahim.saliman.zainab@gmail.com",
        "New Order Notification",
        AdminOrderNotificationComponent({
          customerFullName: `${user.firstName} ${user.lastName}`,
          orderNumber: order.paymentId,
          itemsOrdered: order.orderItems,
          type: order.type,
          deliveryFee: order?.deliveryFee,
          totalAmount: order.total,
          customerAddress: `${user.address}, ${user.lga}, ${user.state}`,
          partnerFullName: `un-assigned`,
          orderTimestamp: moment(order.createdAt).format("MMMM D, YYYY"),
          adminDashboardLink: `${process.env.BASE_URL}/dashboard/${order._id}`,
        })
      );

     
    }

    return NextResponse.json({ order, success: true }, { status: 201 });
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { error: "An error occurred", err },
      { status: 500 }
    );
  } finally {
    await closeDB();
  }
}

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const ordersHistory = await Order.find({ user });

    return NextResponse.json({ ordersHistory, success: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
