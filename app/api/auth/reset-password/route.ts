import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken, verifyMailToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
import sendEmail from "@/utils/resend";

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (token) {
      const decoded = verifyMailToken(token);

      const user = await User.findById(decoded?.payload?.userId);
      if (!user) {
        throw new Error("Invalid email or password");
      }

      return NextResponse.json(
        {
          message: "An email has been sent to verify your account!!!",
          email: user.email,
          success: true,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Invalid token!!!",
          success: true,
        },
        { status: 403 }
      );
    }
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
export async function POST(req: Request, res: Response) {
  try {
    await connectDB();
    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();

    const { email, password } = body;

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return new Response(
        "User does not exists. Try entering other email address",
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    await User.findByIdAndUpdate(
      userExists._id,
      { password: hashedPassword },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "Password Changed successfuly!!!",

        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
