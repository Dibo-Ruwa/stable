// utils/smtp.ts

import nodemailer from 'nodemailer';

const passKey = process.env.NEXT_PUBLIC_ZEPTOMAIL_API_KEY

// Create transporter object for SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.zeptomail.com', 
  port: 587,
  auth: {
    user: 'emailapikey',
    pass: passKey,
  },
});

export default transporter;
