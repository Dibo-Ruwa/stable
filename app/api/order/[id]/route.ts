import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Cart } from "@/utils/models/Cart";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { CartItem } from "@/utils/types/types";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const id = params.id;

    if (!id)
      return NextResponse.json(
        { error: "Item ID  is missing" },
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

    const order = await Order.findById(id);
    if (!order) {
      return NextResponse.json({ message: "Cart does not exist" });
    }

    return NextResponse.json({ order: order, success: true }, { status: 200 });
  } catch (err) {
  return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
