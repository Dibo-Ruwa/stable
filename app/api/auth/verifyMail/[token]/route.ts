import OnboardingTemplate from "@/emails/Onboarding";
import { onBoarding } from "@/emails/mails";
import { verifyMailToken } from "@/templates/authTemplates";
import { closeDB, connectDB } from "@/utils/db";
import User from "@/utils/models/Users";
// import sendEmail, { resend } from "@/utils/resend";
import { NextResponse } from "next/server";
import sendEmail from "@/utils/sendSmtpMail";

export async function GET(
  req: Request,
  { params }: { params: { token: string } }
) {
  try {
    await connectDB();

    const token = params.token;

    const decoded = verifyMailToken(token);

    const user = await User.findById(decoded?.payload?.userId);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    user.emailVerified = true;

    await user.save();

    // Add the email sending logic here
    await sendEmail({
      to: user?.email,
      subject: "Welcome to Diboruwa",
      template: "onboarding", 
      replacements: {
        customerName: user?.firstName,
      },
    });

    return NextResponse.json(
      { success: true, message: "Account activated successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An error occurred", err },
      { status: 500 }
    );
  } finally {
    // await closeDB();
    console.log("Final")
    
  }
}