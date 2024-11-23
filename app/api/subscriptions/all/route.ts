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
      plan: { $ne: 'One-Off Cleaning Plan' } 
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
