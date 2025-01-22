export const generateActivationEmailHTML = (customerName: string, activationLink: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Activate Your Account</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: rgba(14, 252, 213, 0.329);
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .logo {
            text-align: center;
            margin-bottom: 20px;
          }
          .logo img {
            width: 100px;
            height: auto;
          }
          .content {
            background-color: white;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
          }
          .header {
            background-color: #00a6cf;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 12px 12px 0 0;
          }
          .button {
            background-color: #00afdb;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 4px;
            display: inline-block;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="Dibo Ruwa Logo">
          </div>
          <div class="content">
            <div class="header">
              <h1>Welcome to Dibo Ruwa!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Hello <strong style="text-transform: capitalize;">${customerName}</strong>,</p>
              <p>We're excited to have you on board. To activate your account and start enjoying our services, simply click the button below:</p>
              <div style="text-align: center;">
                <a href="${activationLink}" class="button" style="color: white;">Activate Account</a>
              </div>
              <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
              <p style="word-break: break-all;">${activationLink}</p>
              <p>Welcome to the Dibo Ruwa family!</p>
              <p>If you have any questions or need assistance, feel free to contact our support team.</p>
              <p>Best Regards,<br>The Dibo Ruwa Team</p>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Dibo Ruwa. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
