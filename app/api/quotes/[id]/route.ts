import { NextResponse } from "next/server";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import sendEmail from "@/utils/resend";
import {
  AdminQuotePaymentConfirmation,
  CourierQuoteRequestNotification,
  UserQuotePaymentConfirmation,
} from "@/emails";
import moment from "moment";
import { Request } from "@/utils/models/Requests";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/helpers/authOptions";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    // Extract ID from params
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Quote ID is missing" },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" }, { status: 401 });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" }, { status: 404 });
    }

    const quote = await Request.findById(id);
    if (!quote) {
      return NextResponse.json({ message: "Quote does not exist" }, { status: 404 });
    }

    return NextResponse.json({ quote, success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    // Extract ID from params
    const { id } = params;
    const body = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Request ID and new status are required" },
        { status: 400 }
      );
    }

    const request = await Request.findById(id).populate("user courier partner");

    if (!request) {
      return NextResponse.json({ message: "Request does not exist" }, { status: 404 });
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

    // Sending payment confirmation emails
    await sendEmail(
      request.user.email,
      "Payment Confirmation",
      UserQuotePaymentConfirmation({
        firstName: request.user.firstName,
        serviceName: request.type,
        paymentAmount: request.total,
        paymentDate: moment().format("MMMM DD, YYYY"),
        adminEmail: "info@diboruwa.com",
      })
    );

    await sendEmail(
      "ibrahim.saliman.zainab@gmail.com",
      "Payment Confirmation",
      AdminQuotePaymentConfirmation({
        firstName: request.user.firstName,
        serviceName: request.type,
        paymentAmount: request.total,
        paymentDate: moment().format("MMMM DD, YYYY"),
        userEmail: request.user.email,
      })
    );

    await sendEmail(
      request.courier.email,
      "Payment Confirmation",
      CourierQuoteRequestNotification({
        courier: request.courier.businessName,
        fullName: request.user.firstName,
        total: request.deliveryFee,
        userEmail: request.user.email,
        userContact: request.user.phone,
        serviceType: request.type,
        description: quoteText,
        timestamp: moment().format("MMMM DD, YYYY"),
      })
    );

    return NextResponse.json(
      { message: "Request status updated successfully", success: true },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
