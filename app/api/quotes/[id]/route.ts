import { NextResponse } from "next/server";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
import sendEmail from "@/utils/sendSmtpMail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/helpers/authOptions";
import moment from "moment";
import { Request } from "@/utils/models/Requests";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: "Quote ID is missing" },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const quote = await Request.findById(id); // Assuming Quote is your Mongoose model for quotes
    if (!quote) {
      return NextResponse.json({ message: "Quote does not exist" });
    }

    return NextResponse.json({ quote, success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    // await closeDB();
    console.log("Final")

  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const requestId = params.id;
    const { referenceId } = await req.json();

    if (!requestId || !referenceId) {
      return NextResponse.json(
        { error: "Request ID and reference ID are required" },
        { status: 400 }
      );
    }

    const request = await Request.findByIdAndUpdate(
      requestId,
      {
        isPaid: true,
        paymentId: referenceId,
        status: "paid",
        paidAt: new Date()
      },
      { new: true }
    ).populate("user courier partner");

    if (!request) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    // Return updated request data
    return NextResponse.json({ 
      message: "Payment processed successfully", 
      success: true,
      request 
    }, { status: 200 });

  } catch (err) {
    console.error("Payment processing error:", err);
    return NextResponse.json({ error: "Failed to process payment" }, { status: 500 });
  }
}
