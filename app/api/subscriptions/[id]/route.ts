import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { CartItem } from "@/utils/types/types";
import { Subscription } from "@/utils/models/Subscription";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const id = params.id;
    if (!id)
      return NextResponse.json(
        { error: "Item ID is missing" },
        { status: 400 }
      );

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const existingSub = await Subscription.findById(id);

    // Get all subscriptions for the user after adding the new subscription
    const allSubscriptions = await Subscription.find({ user });

    return NextResponse.json(
      { subscription: existingSub, success: true },
      { status: 201 }
    );
  } catch (err) {
   return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const itemIdToDelete = params.id;
    if (!itemIdToDelete)
      return NextResponse.json(
        { error: "Item ID is missing" },
        { status: 400 }
      );

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const existingSub = await Subscription.findByIdAndDelete({
      _id: itemIdToDelete,
      user,
    });

    // Get all subscriptions for the user after adding the new subscription
    const allSubscriptions = await Subscription.find({ user });

    return NextResponse.json(
      { subscriptions: allSubscriptions, success: true },
      { status: 201 }
    );
  } catch (err) {
   return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
