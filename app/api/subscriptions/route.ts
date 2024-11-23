import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { CartItem } from "@/utils/types/types";
import { Subscription } from "@/utils/models/Subscription";
import sendEmail from "@/utils/resend";
import { subscriptionPlans } from "@/constants";
import moment from "moment";
import { sendMail } from "@/utils/sendMail";
import {
  AdminSubscriptionEmail,
  SubscriptionConfirmationEmail,
} from "@/emails";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();

    const { subscription } = body;

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    console.log(body);

    const start = new Date();
    const due = new Date();

    due.setMonth(due.getMonth() + 1);

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    let sub;

    // Check if a subscription already exists for the user
    const existingSubscription = await Subscription.findOne({
      user,
      type: body.subscription.type,
      plan: body.subscription.plan,
    });

    if (!existingSubscription) {
      // Create a new subscription object
      const newSubscription = new Subscription({
        ...body.subscription,
        user,
        start: body.referenceId && start,
        due: body.referenceId && due,
        isPaid: body.referenceId ? true : false,
        paymentId: body.referenceId && body.referenceId,
      });

      // Save the new subscription to the database
      await newSubscription.save();

      if (newSubscription.isPaid === true) {
        await sendEmail(
          user.email,
          "Subscription confirmed",
          SubscriptionConfirmationEmail({
            customerName: `${user.firstName} ${user.lastName}`,
            serviceName: subscription.type,
            planName: subscription.plan,
            startDate: moment(start).format("MMMM D, YYYY"),
            endDate: moment(due).format("MMMM D, YYYY"),
          })
        );

        await sendEmail(
          "ibrahim.zainab.saliman@gmail.com",
          "New Subscription",
          AdminSubscriptionEmail({
            customerName: `${user.firstName} ${user.lastName}`,
            serviceName: subscription.type,
            planName: subscription.plan,
            startDate: moment(start).format("MMMM D, YYYY"),
            endDate: moment(due).format("MMMM D, YYYY"),
          })
        );

        sub = newSubscription;
      }
    } else if (
      existingSubscription &&
      existingSubscription.plan !== "One-Off Cleaning Plan" &&
      existingSubscription.createdAt >= oneMonthAgo &&
      existingSubscription.isPaid === true
    ) {
      // If the subscription is less than a month old and has the same type, return an error
      return NextResponse.json(
        {
          message:
            "You already have an active subscription of the same type that is less than a month old",
        },
        { status: 400 }
      );
    } else if (
      existingSubscription &&
      existingSubscription.plan === "One-Off Cleaning Plan"
    ) {
      const newSubscription = new Subscription({
        ...body.subscription,
        user,
       
      });

      // Save the new subscription to the database
      await newSubscription.save();
    } else {
      existingSubscription.isPaid = true;
      existingSubscription.paymentId = body.referenceId;
      await existingSubscription.save();

      sub = existingSubscription;
    }

    // Get all subscriptions for the user after adding the new subscription
    const allSubscriptions = await Subscription.find({ user, isPaid: false });

    return NextResponse.json(
      {
        subscriptions: allSubscriptions,
        message: "Subscription added successfully!!!",
        subscription: sub,
        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
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

    const subscriptions = await Subscription.find({
      user: user._id,
      isPaid: false,
    });

    if (!subscriptions) {
      return NextResponse.json({ message: "Cart is empty" });
    }

    return NextResponse.json({ subscriptions, success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
