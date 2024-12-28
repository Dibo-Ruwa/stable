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

    // Validate required fields for moving service
    if (
      !data.items ||
      !data.currentLocation ||
      !data.deliveryLocation ||
      !data.pickUpDate ||
      !data.pickUpTime
    ) {
      return NextResponse.json(
        { error: "Missing required fields for moving request" },
        { status: 400 }
      );
    }

    // Format items to match the new structure
    const formattedItems = data.items.map((item: any) => ({
      name: item.name,
      quantity: item.quantity,
      image: item.image || null,
    }));

    // Create new request
    const newRequest = new Request({
      user: user._id,
      type: "moving",
      categories: data.categories || [],
      items: formattedItems,
      currentLocation: data.currentLocation,
      deliveryLocation: data.deliveryLocation,
      pickUpDate: data.pickUpDate,
      pickUpTime: data.pickUpTime,
      description: data.description || "",
      date: moment().format("YYYY-MM-DD"),
    });

    await newRequest.save();

    // Email Content
    const quoteText = formattedItems
      .map((item: any) => `${item.name} -- ${item.quantity}`)
      .join(", ");

    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
    const turnaroundTime = moment().add(1, "day").format("YYYY-MM-DD HH:mm:ss");

    // Send confirmation emails
    // await sendEmail(
    //   user.email,
    //   "Request Confirmation",
    //   UserQuoteRequestConfirmation({
    //     firstName: user.firstName,
    //     serviceType: "moving",
    //     description: quoteText,
    //     timestamp,
    //     turnaroundTime,
    //     adminContact: "info@diboruwa.com",
    //   })
    // );

    // await sendEmail(
    //   "ibrahim.saliman.zainab@gmail.com",
    //   "New Moving Request",
    //   MovingRequestEmail({
    //     customerName: `${user.firstName} ${user.lastName}`,
    //     customerEmail: user.email,
    //     customerPhone: user.phone,
    //     itemsForMoving: quoteText,
    //     currentAddress: data.currentLocation,
    //     destinationAddress: data.deliveryLocation,
    //     preferredDate: moment(data.pickUpDate).format("MMMM D, YYYY"),
    //     companyName: "Dibo Ruwa",
    //   })
    // );

     // First, send an email to the user
     await sendEmail({
      to: user?.email,
      subject: "Your Moving Request",
      template: "userMoveRequest",
      replacements: {
        firstName: user.firstName,
        serviceType: data.type,
        description: quoteText,
        timestamp: timestamp,
        turnaroundTime: turnaroundTime,
        adminContact: "info@diboruwa.com",
      },
    });

    // After sending the email to the user, send the email to the admin
    await sendEmail({
      to: "ibrahim.saliman.zainab@gmail.com",
      subject: `New Moving Request from ${user.firstName} ${user.lastName}`,
      template: "adminMovingRequest",
      replacements: {
        customerName: `${user.firstName} ${user.lastName}`,
        customerEmail: user.email,
        customerPhone: user.phone,
        itemsForMoving: quoteText,
        currentAddress: data.currentLocation,
        destinationAddress: data.deliveryLocation,
        preferredDate: data.pickUpDate,
        preferredTime: data.pickUpTime,
        companyName: "Diboruwa",
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
    console.error("Error submitting moving request:", err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
