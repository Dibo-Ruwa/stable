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
import moment from "moment";
import { Request } from "@/utils/models/Requests";


type Item = {
  name: string;
  id: number;
  quantity: number;
};

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const userId = session.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    // Query the database for all quotes belonging to the user && fill user
    const quotes = await Request.find({ user: userId }).populate("user");

    // You can send the 'quotes' array as the response
    return NextResponse.json({ quotes }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  } finally {
    // await closeDB();
    console.log("Final")

  }
}

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const body = await req.json();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const { data } = body;
   
    const timestamp = moment().format("MMMM DD, YYYY");
    const turnaroundTime = moment().add(1, "day").format("YYYY-MM-DD HH:mm:ss");

    const quoteText = data.quote
      .filter((item: any) => item.amount > 0)
      .map((item: any) => `${item.name} -- ${item.amount}`)
      .join(", ");

    const newItems: Omit<Item, "id">[] = data.quote.map(
      ({ id, ...rest }: { id: number; rest: any }) => rest
    );

    const newRequest = new Request({
      user,
      type: data.type,
      items: newItems,
      from: `${user.address}, ${user.lga},  ${user.state}`,
      date: timestamp,
    });

    await newRequest.save();

    const serviceType = data.type === "laundry" ? "Laundry" : data.type === "cleaning" ? "Cleaning" : ""

    await sendEmail({
      to: user.email,
      subject: `Your New ${serviceType} Quote`,
      template: "userQuoteRequest",
      replacements: {
        firstName: user.firstName,
        serviceType: serviceType,
        description: quoteText,
        timestamp: timestamp,
        turnaroundTime: turnaroundTime,
        adminContact: "info@diboruwa.com",
      },
    });


    if (data.type === "laundry") {
    
      const formattedLaundryItems = data.quote
      .map((item: any) => `<li>${item.name} - ${item.amount}</li>`)
      .join("");

      await sendEmail({
        // to: "ibrahim.saliman.zainab@gmail.com",
        to: ["ibrahim.saliman.zainab@gmail.com", "Mickeyterian@gmail.com"].join(", "),
        subject: `${serviceType} Quote Confirmation`,
        template: "adminLaundyQuote",
        replacements: {
          adminName: "Ibrahim",
          userName: `${user.firstName} ${user.lastName}`,
          userEmail: user.email,
          userContact: user.phone,
          userAddress: `${user.address}, ${user.lga},  ${user.state}`,
          // laundryItems: data.quote,
          laundryItems: formattedLaundryItems,
        },
      });

    } else if (data.type === "cleaning") {
  
      const formattedCleaningItems = data.quote
        .map((item: any) => `<li>${item.name} - ${item.amount}</li>`)
        .join("");
        
      await sendEmail({
        to: "ibrahim.saliman.zainab@gmail.com",
        subject: `${serviceType} Quote Confirmation`,
        template: "adminHomeCleaningQuote",
        replacements: {
          adminName: "Ibrahim",
          userName: `${user.firstName} ${user.lastName}`,
          userEmail: user.email,
          userContact: user.phone,
          userAddress: `${user.address}, ${user.lga},  ${user.state}`,
          homeCleaningAreas: formattedCleaningItems,
        },
      });
    }

    return NextResponse.json(
      { message: "emails sent successfully", quote: newRequest, success: true },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
