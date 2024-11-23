import nodemailer from "nodemailer";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "info@diboruwa.com",
    pass: "XAMR26spfSG2",
  },
});

// Function to send an email

const sendMail = (to: string, subject: string, html: string) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "noreply@tractive.com",
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export { sendMail };
