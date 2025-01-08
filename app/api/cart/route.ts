import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { CartItem } from "@/utils/types/types";
import { Subscription } from "@/utils/models/Subscription";
import mongoose from "mongoose"; // Import mongoose

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "Please sign in to add items to cart" }, 
        { status: 401 }
      );
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" }, 
        { status: 404 }
      );
    }

    const body = await req.json();
    const cartItem = {
      _id: new mongoose.Types.ObjectId(), // Ensure _id is a valid ObjectId
      id: body.id,
      title: body.title,
      price: body.price,
      imageUrl: body.imageUrl,
      vendor: body.vendor,
      quantity: 1,
      extras: body.extras || [],
      total: body.price,
      categories: body.categories || [],
      prep_time: body.prep_time
    };

    const existingCart = await Cart.findOne({ user: user._id });

    if (!existingCart) {
      const cart = new Cart({
        user: user._id,
        cartItems: [cartItem],
        subtotal: body.price,
        total: body.price
      });

      await cart.save();
      return NextResponse.json({ cart, success: true }, { status: 201 });
    }

    const existingCartItem = existingCart.cartItems.find(
      (item: CartItem) => item.title === body.title
    );

    if (existingCartItem) {
      existingCartItem.quantity++;
      existingCartItem.total = existingCartItem.price * existingCartItem.quantity;
    } else {
      existingCart.cartItems.push(cartItem);
    }

    let cartTotal = 0;
    existingCart.cartItems.forEach((item: CartItem) => {
      cartTotal += item.total;
    });

    existingCart.total = cartTotal;
    await existingCart.save();

    const populatedCart = await Cart.findById(existingCart._id).populate({
      path: 'cartItems.vendor',
      populate: {
        path: 'branch.location.city branch.location.region branch.deliveries.region operations'
      }
    });

    return NextResponse.json(
      { cart: populatedCart, success: true },
      { status: 201 }
    );
  } catch (err) {
    console.error('Cart POST error:', err);
    return NextResponse.json(
      { error: "Failed to add item to cart" }, 
      { status: 500 }
    );
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

    const cart = await Cart.findOne({ user: user._id }).populate({
      path: 'cartItems.vendor',
      populate: {
        path: 'branch.location.city branch.location.region branch.deliveries.region operations'
      }
    });

    if (!cart) {
      return NextResponse.json({ message: "Cart is empty" });
    }

    return NextResponse.json({ cart, success: true });
  } catch (err) {
    console.error('Cart GET error:', err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}

export async function DELETE(req: Request, res: Response) {
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

    const cart = await Cart.findOne({ user: user._id });

    const subs = await Subscription.deleteMany({ user, isPaid: false });

    if (!cart) {
      return NextResponse.json({ message: "Cart is empty" });
    }
    cart.cartItems = [];
    cart.total = 0;

    await cart.save();

    return NextResponse.json({ cart, subscriptions: [], success: true });
  } catch (err) {
    console.error('Cart DELETE error:', err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
