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
    const { action, extraId, extraDetails } = body;
    
    console.log('PUT request body:', { id, action, extraId, extraDetails });

    // Validation checks
    if (!id || !action) {
      return NextResponse.json(
        { error: "Item ID or action is missing" },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const existingCart = await Cart.findOne({ user: session.user._id });
    if (!existingCart) {
      return NextResponse.json(
        { error: "Cart not found" },
        { status: 404 }
      );
    }

    console.log('Found cart:', existingCart._id);

    const existingCartItem = existingCart.cartItems.find(
      (item: any) => item._id.toString() === id
    );

    if (!existingCartItem) {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }

    console.log('Found cart item:', existingCartItem._id);

    if (extraId) {
      try {
        // Initialize extras array if it doesn't exist
        if (!existingCartItem.extras) {
          existingCartItem.extras = [];
        }

        // Find existing extra or create new one
        let extra = existingCartItem.extras.find(
          (extra: any) => extra._id.toString() === extraId
        );

        // If extra doesn't exist and we have details, create it
        if (!extra && extraDetails) {
          console.log('Creating new extra with details:', extraDetails);
          extra = {
            _id: extraId,
            quantity: 0,
            ...extraDetails // Spread all provided details
          };
          existingCartItem.extras.push(extra);
          console.log('Added new extra:', extra);
        } else if (!extra) {
          return NextResponse.json(
            { error: "Extra not found and no details provided" },
            { status: 400 }
          );
        }

        // Update quantity
        if (action === "increase") {
          extra.quantity = (extra.quantity || 0) + 1;
        } else if (action === "decrease") {
          extra.quantity = Math.max(0, (extra.quantity || 0) - 1);
        }

        console.log('Updated extra quantity:', extra.quantity);

        // Filter out extras with quantity 0
        existingCartItem.extras = existingCartItem.extras.filter(
          (extra: any) => extra.quantity > 0
        );

        // Calculate extras total
        const extrasTotal = existingCartItem.extras.reduce((acc: number, extra: any) => {
          return acc + (extra.price * (extra.quantity || 0));
        }, 0);

        existingCartItem.total = (existingCartItem.price * existingCartItem.quantity) + extrasTotal;
        
        console.log('Updated extra:', extra);
      } catch (error) {
        console.error('Error updating extra:', error);
        return NextResponse.json(
          { error: "Failed to update extra" },
          { status: 400 }
        );
      }
    } else {
      // Handle main item quantity update
      if (action === "increase") {
        existingCartItem.quantity++;
      } else if (action === "decrease") {
        existingCartItem.quantity--;

        if (existingCartItem.quantity <= 0) {
          existingCart.cartItems = existingCart.cartItems.filter(
            (item: any) => item._id.toString() !== id
          );
        }
      }

      existingCartItem.total = existingCartItem.price * existingCartItem.quantity;
    }

    // Update cart total
    existingCart.total = existingCart.cartItems.reduce((total: number, item: CartItem) => {
      const itemExtrasTotal = item.extras?.reduce((acc: number, extra: any) => 
        acc + (extra.price * (extra.quantity || 0)), 0) || 0;
      return total + (item.price * item.quantity) + itemExtrasTotal;
    }, 0);

    await existingCart.save();

    const populatedCart = await Cart.findById(existingCart._id).populate({
      path: 'cartItems.vendor',
      populate: {
        path: 'branch.location.city branch.location.region branch.deliveries.region operations'
      }
    });

    return NextResponse.json(
      { cart: populatedCart, success: true, prep_time: populatedCart.prep_time },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cart PUT error:', error);
    return NextResponse.json(
      { error: "An error occurred", details: error },
      { status: 500 }
    );
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

    const populatedCart = await Cart.findById(existingCart._id).populate({
      path: 'cartItems.vendor',
      populate: {
        path: 'branch.location.city branch.location.region branch.deliveries.region operations'
      }
    });

    return NextResponse.json(
      { cart: populatedCart, success: true },
      { status: 200 }
    );
  } catch (err) {
   return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
