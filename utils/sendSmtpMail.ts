// utils/sendEmail.ts
import fs from 'fs';
import path from 'path';
import transporter from './smtp';  // Import your SMTP configuration

const loadTemplate = (templateName: string): string => {
  const filePath = path.join(process.cwd(), 'email-templates', `${templateName}.html`);
  return fs.readFileSync(filePath, 'utf-8');
};

interface EmailPayload {
  to: string;
  subject: string;
  template: string;  // The template name (e.g. "signup")
  replacements: Record<string, string>;  // Data to replace dynamic fields in the template
}

const sendEmail = async ({ to, subject, template, replacements }: EmailPayload) => {
  try {
    // Load the email template
    let htmlContent = loadTemplate(template);

    // Replace placeholders with actual data
    Object.keys(replacements).forEach((key) => {
      const regex = new RegExp(`{{${key}}}`, 'g');  // Look for {{key}} in the HTML
      htmlContent = htmlContent.replace(regex, replacements[key]);
    });

    // Define email options
    const mailOptions = {
      from: '"Diboruwa Home Services" <noreply@www.diboruwa.com>',  // Sender info
      to,
      subject,
      html: htmlContent,  // The processed HTML with dynamic data replaced
    };

    // Send the email using nodemailer
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
