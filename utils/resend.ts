import React from "react";
import { Resend } from "resend";

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_SECRET as string);

// Define a reusable email sending function
const sendEmail = async (
  to: string,
  subject: string,
  react: React.ReactNode
) => {
  try {
    const data = await resend.emails.send({
      from: "donotreply@teams.diboruwa.com",
      to,
      text: "DiboRuwa Team",
      subject,
      react,
    });

    return data;
  } catch (error) {
    throw error;
  }
};


export default sendEmail
