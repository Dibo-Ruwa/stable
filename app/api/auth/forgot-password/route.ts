import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
// import sendEmail from "@/utils/resend";
import sendEmail from "@/utils/sendSmtpMail";
import { PasswordRecoveryEmail } from "@/emails";
import { PasswordRecorvery } from "@/emails/mails";
import { sendMail } from "@/utils/sendMail";


export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();

    const { email } = body;

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return new Response(
        "No user found. Please enter the correct email address.",
        { status: 400 }
      );
    }

    // @todo verification mail

    const resetToken = generateToken(userExists._id);

    const baseUrl = process.env.BASE_URL;

    // await sendEmail(
    //   userExists.email,
    //   "Reset Password",
    //   PasswordRecoveryEmail({
    //     userName: userExists.firstName,
    //     passwordResetLink: `${baseUrl}/reset-password?token=${resetToken}`,
    //   })
    // );

    await sendEmail({
      to: userExists.email,
      subject: "Reset Password",
      template: "passwordReset",  // The HTML template you want to use
      replacements: {
        userName: userExists?.firstName,
        passwordResetLink: `${baseUrl}/reset-password?token=${resetToken}`,

      },
    });

    return NextResponse.json(
      {
        message: "An email has been sent to verify your account.",
        resetToken,
        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    // await closeDB();
    console.log("Final")

  }
}
