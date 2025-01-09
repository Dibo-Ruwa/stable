import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { Subscription } from "@/utils/models/Subscription";
import sendEmail from "@/utils/sendSmtpMail";
import moment from "moment";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body) {
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    }

    const body = await req.json();
    const { subscription } = body;

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const start = new Date();
    const due = new Date();
    due.setMonth(due.getMonth() + 1); // One-month subscription

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1); // To check for recent subscriptions

    let sub;

    // Check if a subscription already exists for the user
    const existingSubscription = await Subscription.findOne({
      user,
      type: subscription.type,
      plan: subscription.plan,
    });

    if (!existingSubscription) {
      // Create a new subscription if no existing one is found
      const newSubscription = new Subscription({
        ...subscription,
        user,
        start: body.referenceId && start,
        due: body.referenceId && due,
        isPaid: body.referenceId ? true : false,
        paymentId: body.referenceId,
      });

      await newSubscription.save();
      sub = newSubscription;

      // If the subscription is paid, send confirmation emails
      if (newSubscription.isPaid === true) {
        await sendEmail({
          to: user?.email,
          subject: "Subscription confirmed",
          template: "customerSubEmail",
          replacements: {
            customerName: user.firstName,
            serviceName: subscription.type,
            planName: subscription.plan,
            startDate: moment(start).format("MMMM D, YYYY"),
            endDate: moment(due).format("MMMM D, YYYY"),
          },
        });

        await sendEmail({
          to: "ibrahim.saliman.zainab@gmail.com",
          subject: "New Subscription Confirmation",
          template: "adminSubscriptionNotify", 
          replacements: {
            customerName: `${user.firstName} ${user.lastName}`,
            serviceName: subscription.type,
            planName: subscription.plan,
            customerPhone: user?.phone,
            startDate: moment(start).format("MMMM D, YYYY"),
            endDate: moment(due).format("MMMM D, YYYY"),
          },
        });
      }
    } 
    // else if (
    //   existingSubscription &&
    //   existingSubscription.plan !== "One-Off Cleaning Plan" &&
    //   existingSubscription.createdAt >= oneMonthAgo &&
    //   existingSubscription.isPaid === true
    // ) {
    //   // If the subscription is less than a month old and is active, return an error
    //   return NextResponse.json({
    //     message: "You already have an active subscription of the same type that is less than a month old",
    //   }, { status: 400 });
    // } 
    
    else if (existingSubscription && existingSubscription.plan === "One-Off Cleaning Plan") {
      // Allow multiple subscriptions for "One-Off Cleaning Plan"
      const newSubscription = new Subscription({
        ...subscription,
        user,
      });

      
      await newSubscription.save();
      sub = newSubscription;
    } else {
      // For existing subscriptions, mark as paid if a reference ID is provided
      existingSubscription.isPaid = true;
      existingSubscription.paymentId = body.referenceId;
      await existingSubscription.save();

      sub = existingSubscription;
    }

    // Retrieve all subscriptions for the user after processing the new subscription
    const allSubscriptions = await Subscription.find({ user });

    return NextResponse.json({
      subscriptions: allSubscriptions,
      subscription: sub,
      message: "Subscription added successfully",
      success: true,
    });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "An error occurred", err }, { status: 500 });
  } finally {
    console.log("Subscription processing completed");
  }
}

// GET route to retrieve subscriptions
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

    // Retrieve all subscriptions for the user
    const subscriptions = await Subscription.find({
      user: user._id,
    });

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ message: "No subscriptions found" });
    }

    return NextResponse.json({ subscriptions, success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "An error occurred", err }, { status: 500 });
  } finally {
    console.log("Subscription retrieval complete");
  }
}
