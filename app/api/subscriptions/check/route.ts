import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { Subscription } from "@/utils/models/Subscription";

export async function GET(req: Request) {
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

    const { searchParams } = new URL(req.url);
    const subscriptionType = searchParams.get("type");

    // Check if the user has an active subscription of the given type
    const activeSubscription = await Subscription.findOne({
      user: user._id,
      type: subscriptionType,
      isPaid: true,
      due: { $gte: new Date() }, // Subscription is still valid
    });

    if (activeSubscription) {
      return NextResponse.json({ hasActiveSubscription: true });
    } else {
      return NextResponse.json({ hasActiveSubscription: false });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
