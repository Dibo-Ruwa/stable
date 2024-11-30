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

    const start = new Date();
    const due = new Date();

    due.setMonth(due.getMonth() + 1);

    const newSubscription = new Subscription({
      ...body.subscription,
      user,
      start,
      due,
    });

    // Save the new subscription to the database
    await newSubscription.save();

    // Get all subscriptions for the user after adding the new subscription
    const allSubscriptions = await Subscription.find({ user });

    return NextResponse.json(
      {
        subscriptions: allSubscriptions,
        message: "Subscription added successfully!!!",
        subscription: newSubscription,
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
