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

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const requestId = params.id;
    const body = await req.json();

    if (!requestId) {
      return NextResponse.json(
        { error: "Request ID and new status are required" },
        { status: 400 }
      );
    }

    const request = await Request.findById(requestId).populate("user courier partner");

    if (!request) {
      return NextResponse.json({ message: "Request does not exist" });
    }

    const quoteText = request.items
      .filter((item: any) => item.amount > 0)
      .map((item: any) => `${item.name} -- ${item.amount}`)
      .join(", ");
    const { referenceId } = body;

    if (referenceId) {
      request.isPaid = true;
      request.paymentId = referenceId;
      request.status = "paid";
    }

    await request.save();

     // First, send an email to the user
     await sendEmail({
      to: request.user.email,
      subject: "Payment Confirmation",
      template: "userQuotePayment",
      replacements: {
        firstName: request.user.firstName,
        serviceName: request.type,
        paymentAmount: request.total,
        paymentDate: moment().format("MMMM DD, YYYY"),
        adminEmail: "info@diboruwa.com",
      },
    });

    // After sending the email to the user, send the email to the admin
    await sendEmail({
      to: "ibrahim.saliman.zainab@gmail.com",
      subject: `Payment Confirmation`,
      template: "adminQuotePayment",
      replacements: {
        firstName: request.user.firstName,
        serviceName: request.type,
        paymentAmount: request.total,
        paymentDate: moment().format("MMMM DD, YYYY"),
        userEmail: "info@diboruwa.com",
      },
    });

    // Courier email
    await sendEmail({
      to:  request.courier.email,
      subject: `New Moving Assignment`,
      template: "courierQuotePayment",
      replacements: {
        courier: request.courier.businessName,
        fullName: request.user.firstName,
        total: request.deliveryFee,
        userEmail: request.user.email,
        userContact: request.user.phone,
        serviceType: request.type,
        description: quoteText,
        timestamp: moment().format("MMMM DD, YYYY"),
      },
    });

    return NextResponse.json(
      { message: "Request status updated successfully", success: true },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    // await closeDB();
    console.log("Final")

  }
}
