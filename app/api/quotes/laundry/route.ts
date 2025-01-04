import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
// import sendEmail from "@/utils/resend";
import sendEmail from "@/utils/sendSmtpMail";
import { sendMail } from "@/utils/sendMail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/helpers/authOptions";
import { MovingRequestEmail, UserQuoteRequestConfirmation } from "@/emails";
import moment from "moment";
import { Request } from "@/utils/models/Requests";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body) {
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" }, { status: 401 });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" }, { status: 404 });
    }

    const { data } = body;

    // Validate required fields for laundry request
    if (
      !data.items ||
      !data.currentLocation ||
      !data.pickUpDate ||
      !data.pickUpTime
    ) {
      return NextResponse.json(
        { error: "Missing required fields for laundry request" },
        { status: 400 }
      );
    }

    // Format items to match the new structure
    const formattedItems = data.items.map((item: any) => ({
      name: item.name,
      quantity: item.quantity,
      image: item.image || null,
      video: item.video || null,
    }));

    // Create new request
    const newRequest = new Request({
      user: user._id,
      type: "laundry",
      categories: data.categories || [],
      items: formattedItems,
      currentLocation: data.currentLocation,
      pickUpDate: new Date(data.pickUpDate),
      pickUpTime: data.pickUpTime,
      estimatedReturn: new Date(data.estimatedReturn),
      description: data.description || "",
      date: new Date(), // Use current date
      status: "pending",
      isPaid: false,
    });

    await newRequest.save();

    // Email Content
    const quoteText = formattedItems
      .map((item: any) => `${item.name} -- ${item.quantity}`)
      .join(", ");

    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");

    // Send an email to the user
    await sendEmail({
      to: user.email,
      subject: `Your Laundry Request`,
      template: "userQuoteRequest",
      replacements: {
        firstName: user.firstName,
        serviceType: data.type,
        description: quoteText,
        timestamp: timestamp,
        turnaroundTime: data.estimatedReturn,
        adminContact: "info@diboruwa.com",
      },
    });

    // Send an email to the admin
    const formattedLaundryItems = formattedItems
      .map((item: any) => `<li>${item.name} - ${item.quantity}</li>`)
      .join("");

    await sendEmail({
      to: "ibrahim.saliman.zainab@gmail.com",
      subject: `New Laundry Request from ${user.firstName} ${user.lastName}`,
      template: "adminLaundyQuote",
      replacements: {
        adminName: "Admin",
        userName: `${user.firstName} ${user.lastName}`,
        userEmail: user.email,
        userContact: user.phone,
        userAddress: `${user.address}, ${user.lga},  ${user.state}`,
        laundryItems: formattedLaundryItems,
      },
    });

    return NextResponse.json(
      {
        message: "Request submitted successfully",
        quote: newRequest,
        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error submitting laundry request:", err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
