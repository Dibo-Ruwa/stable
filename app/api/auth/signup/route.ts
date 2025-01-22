import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import sendEmail from "@/utils/sendSmtpMail"; 

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body) return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const { email, password, firstName } = body;

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return new Response("User already exists. Please enter another email address or sign in.", { status: 400 });
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create new user model
    const user = new User({
      ...body,
      password: hashedPassword,
    });

    // Save the new user model to database
    const createdUser = await user.save();

    // Create cart upon registration
    const cart = new Cart({
      user: user._id,
    });
    await cart.save();

    // Generate activation link
    const activationLink = generateToken(user._id);

    // Send activation email
    await sendEmail({
      to: email,
      subject: "Activate Your Account",
      template: "signup",  // Make sure this matches your template name
      replacements: {
        customerName: firstName,
        activationLink: `${process.env.BASE_URL}/verifyMail/${activationLink}`,  // Ensure BASE_URL is properly set
      },
    });

    console.log("Email sent successfully");

    return NextResponse.json(
      {
        message: "You have signed up successfully. A verification email has been sent to you, please verify your account.",
        user,
        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(err);
  } finally {
    console.log("Final");
  }
}
