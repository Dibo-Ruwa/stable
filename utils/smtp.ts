// utils/smtp.ts

import nodemailer from 'nodemailer';

const passKey = process.env.NEXT_PUBLIC_ZEPTOMAIL_API_KEY

if (!passKey) {
  console.error('NEXT_PUBLIC_ZEPTOMAIL_API_KEY is not set in environment variables');
}

// Create transporter object for SMTP
// const transporter = nodemailer.createTransport({
//   host: 'smtp.zeptomail.com',
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: 'emailapikey',
//     pass: passKey,
//   },
//   debug: true, // Enable debugging
// });

const transporter = nodemailer.createTransport({
  host: 'smtp.zeptomail.com',
  port: 465,
  secure: true, // true for SSL
  auth: {
    user: 'emailapikey',
    pass: passKey,
  },
  debug: true,
});


// Verify SMTP connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

export default transporter;
