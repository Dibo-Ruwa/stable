import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { CartItem } from "@/utils/types/types";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await req.json();
    const id = params.id;
    const { action } = body;
    if (!id || !action)
      return NextResponse.json(
        { error: "Item ID or action is missing" },
        { status: 400 }
      );

    if (action !== "increase" && action !== "decrease") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const existingCart = await Cart.findOne({ user: user._id });
    if (!existingCart) {
      return NextResponse.json({ message: "Cart does not exist" });
    }

    const existingCartItem = existingCart.cartItems.find(
      (item: any) => item._id.toString() === id
    );

    if (!existingCartItem) {
      return NextResponse.json({ message: "Item not found in the cart" });
    }

    if (action === "increase") {
      existingCartItem.quantity++;
    } else if (action === "decrease") {
      existingCartItem.quantity--;

      if (existingCartItem.quantity <= 0) {
        // If the quantity becomes zero or negative, remove the item from the cart
        existingCart.cartItems = existingCart.cartItems.filter(
          (item: any) => item._id.toString() !== id
        );
      }
    }

    existingCartItem.total = existingCartItem.price * existingCartItem.quantity;

    // Update the cart total
    let cartTotal = 0;
    existingCart.cartItems.forEach((item: CartItem) => {
      cartTotal += item.total;
    });
    existingCart.total = cartTotal;

    await existingCart.save();

    return NextResponse.json(
      { cart: existingCart, success: true },
      { status: 200 }
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

    const existingCart = await Cart.findOne({ user: user._id });
    if (!existingCart) {
      return NextResponse.json({ message: "Cart does not exist" });
    }

    const existingCartItemIndex = existingCart.cartItems.findIndex(
      (item: CartItem) => item.id.toString() === itemIdToDelete
    );

    if (existingCartItemIndex === -1) {
      return NextResponse.json({ message: "Item not found in the cart" });
    }

    existingCart.cartItems.splice(existingCartItemIndex, 1);

    // Update the cart total
    let cartTotal = 0;
    existingCart.cartItems.forEach((item: CartItem) => {
      cartTotal += item.total;
    });
    existingCart.total = cartTotal;

    await existingCart.save();

    return NextResponse.json(
      { cart: existingCart, success: true },
      { status: 200 }
    );
  } catch (err) {
   return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
