import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { CartItem } from "@/utils/types/types";
import { Subscription } from "@/utils/models/Subscription";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    console.log(body);
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const existingCart = await Cart.findOne({ user: user._id });


    // console.log(body)
    if (!existingCart) {
      // If no existing cart, create a new one and add the item to it
      const cart = new Cart({
        user: user._id,
        cartItems: [
          {
            title: body.title,
            price: body.price,
            imageUrl: body.imageURL,
            discount: body.discount,
            vendor: body.vendor,
            categories: body.categories,
            quantity: 1,
            total: body.price, // Initial total for a single item
          },
        ],
        total: body.price, // Initial total for the cart with a single item
      });

      // console.log(cart);

      await cart.save();
    } else {
      // If an existing cart is found, check if the item exists
      const existingCartItem = existingCart.cartItems.find(
        (item: CartItem) => item.title === body.title
      );

      if (existingCartItem) {
        // If the item already exists, increase the quantity by 1 and update the total
        existingCartItem.quantity++;
        existingCartItem.total =
          existingCartItem.price * existingCartItem.quantity;
      } else {
        // If the item does not exist, add it to the cart
        existingCart.cartItems.push({
          title: body.title,
          price: body.price,
          imageUrl: body.imageURL,
          discount: body.discount,
          vendor: body.vendor,
          categories: body.categories,
          quantity: 1,
          total: body.price,

          // Initial total for a single item
        });
      }

      // Update the cart total
      let cartTotal = 0;
      existingCart.cartItems.forEach((item: CartItem) => {
        cartTotal += item.total;
      });

      existingCart.total = cartTotal;
      await existingCart.save();
    }

    return NextResponse.json(
      { cart: existingCart, success: true },
      { status: 201 }
    );
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: "An error occurred", err }, { status: 500 });
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

    const cart = await Cart.findOne({ user: user._id });

    if (!cart) {
      return NextResponse.json({ message: "Cart is empty" });
    }

    return NextResponse.json({ cart, success: true });
  } catch (err) {
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
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
