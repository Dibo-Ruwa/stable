function subscriptionConfirmed(data: any) {
  return `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <!-- Meta and style declarations as before -->
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              />
              <style>
                body {
                  background-color: hsla(201, 100%, 36%, 0.226);
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  min-height: 100vh;
                  padding: 50px 0;
                }
          
                .image_logo {
                    margin-bottom: 20px;
                }
          
                img {
                  width: 100px;
                }
                .email-container {
                  max-width: 600px;
                  margin: 0 auto;
                }
                .email-header {
                  background-color: #0077b6;
                  color: #ffffff;
                  text-align: center;
                  padding: 10px;
                }
                .email-content {
                  background-color: #ffffff;
                  padding: 20px;
                }
          
                .email-footer {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
          
                .email-footer ul {
                  list-style-type: none;
                  display: flex;
                  justify-content: center;
                  gap: 20px;
                }
          
                .email-footer ul li a {
                  color: rgb(61, 61, 61);
                  font-size: 20px;
                  transition: all 0.3s ease-in-out;
                }
          
                .email-footer ul li a:hover {
                  color: rgb(7, 7, 7);
                }
          
                @media screen and (max-width: 768px) {
                  .email-container {
                    max-width: 100%;
                  }
          
                  .email-header {
                    font-size: 13px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="image_logo">
                    <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
              </div>
              <div class="email-container">
                <div class="email-header">
                  <h1>Subscription Confirmed!</h1>
                </div>
                <div class="email-content">
                  <p>Hello ${data.customerName},</p>
                  <p>
                    Great choice! We're thrilled to have you onboard. Your subscription
                    for ${data.service} is now confirmed. Get ready for a hassle-free and
                    delightful experience.
                  </p>
                  <p><strong>Details:</strong></p>
                  <ul>
                    <li>Service: ${data.service}</li>
                    <li>Plan: ${data.planName}</li>
                    <li>Subscription Period: ${data.startDate} to ${data.endDate}</li>
                  </ul>
                  <p>Thank you for trusting Dibo Ruwa. We're excited to serve you!</p>
                  <p>Warmly,<br />The Dibo Ruwa Team</p>
                </div>
                <!-- Footer with social links using icons from a CDN (FontAwesome) -->
                <div class="email-footer">
                  <p>Follow us on social media:</p>
                  <ul class="social-icons">
                    <li>
                      <a href="https://example.com/facebook" target="_blank">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://example.com/twitter" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://example.com/instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </body>
          </html>
          

          `;
}

export function activateAccnt(data: any) {
  return `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link
                href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
              />
              <style>
                * {
                  padding: 0;
                  margin: 0;
                  box-sizing: border-box;
                }
          
                
                .main_body {
                  display: grid;
                  grid-template-columns: repeat(1, 1fr);
                  justify-content: center;
                  align-items: center;
                  font-family: "Poppins", sans-serif;
                  padding: 50px 20px;
                  background-color: rgba(0, 119, 184, 0.226);
                  gap: 30px;
                  line-height: 1.3;
                }
                p {
                  margin-bottom: 10px;
                }
          
                .image_logo {
                  margin-bottom: 20px;
                  text-align: center;
                }
          
                .image_logo img {
                  width: 100px;
                }
                .email-container {
                  max-width: 600px;
                  margin: 0 auto;
                }
                .email-header {
                  background-color: #0077b6;
                  color: #ffffff;
                  text-align: center;
                  padding: 10px;
                }
                .email-content {
                  background-color: #ffffff;
                  padding: 30px;
                }
          
                button {
                  background-color: #0077b6;
                  color: #fff;
                  padding: 12px 25px;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  text-decoration: none;
                  margin: 10px 0;
                  display: block;
                  width: max-content;
                }
          
                .email-footer {
                  display: grid;
                  grid-template-columns: repeat(1, 1fr);
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  gap: 15px;
                  margin: 20px auto;
                  width: 100%;
                }
          
                .email-footer p {
                    text-align: center;
                    margin: auto;
                }
          
                .email-footer ul {
                  list-style-type: none;
                  display: flex;
                  justify-content: center;
                  gap: 20px;
                  margin: auto;
                }
          
                .email-footer ul li a {
                  color: rgb(61, 61, 61);
                  font-size: 20px;
                  transition: all 0.3s ease-in-out;
                }
          
                .email-footer img {
                  width: 30px;
                }
          
                .email-footer ul li a:hover {
                  color: rgb(7, 7, 7);
                }
          
                @media screen and (max-width: 768px) {
                  .email-container {
                    max-width: 100%;
                  }
          
                  .email-header {
                    font-size: 13px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="main_body">
                <div class="image_logo">
                      <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
                </div>
                <div class="email-container">
                  <div class="email-header">
                    <h1>Welcome to Dibo Ruwa!</h1>
                  </div>
                  <div class="email-content">
                    <p>Hello <strong>${data.customerName}</strong></p>
                    <p>
                      We&#39;re excited to have you on board. To activate your account and
                      start enjoying our services, simply click the button below:
                    </p>
                    <a
                      href="${data.activationLink}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Activate Account</button>
                    </a>
                    <p>
                      If the button doesn&#39;t work, you can also copy and paste the
                      following link into your browser&#39;s address bar:
                      <br />
                    </p>
                    <p>Welcome to the Dibo Ruwa family!</p>
                    <p>
                      If you have any questions or need assistance, feel free to contact
                      our support team.
                    </p>
                    <p>
                      Best Regards, <br />
                      The Dibo Ruwa Team
                    </p>
                  </div>
                </div>
                <div class="email-footer">
                  <p>Follow us on social media:</p>
                  <ul class="social-icons">
                    <li>
                      <a href="https://example.com/facebook" target="_blank">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                          alt="facebook_logo"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://example.com/twitter" target="_blank">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                          alt="twitter_logo"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://example.com/instagram" target="_blank">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                          alt="instagram_logo"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </body>
          </html>         
          `;
}

export function onBoarding(data: any) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .main_body {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        padding: 50px 20px;
        background-color: rgba(0, 119, 184, 0.226);
        gap: 30px;
        line-height: 1.3;
      }
      p {
        margin-bottom: 10px;
      }

      .image_logo {
        margin-bottom: 20px;
        text-align: center;
      }

      .image_logo img {
        width: 100px;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
      }
      .email-header {
        background-color: #0077b6;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        font-size: 13px;
      }
      .email-content {
        background-color: #ffffff;
        padding: 30px;
      }

      button {
        background-color: #0077b6;
        color: #fff;
        padding: 12px 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        margin: 10px 0;
        display: block;
        width: max-content;
      }

      .email-footer {
        // display: grid;
        // grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        // align-items: center;
        // text-align: center;
        gap: 20px;
        margin: 20px auto;
        width: 100%;
      }

      .email-footer p {
        text-align: center;
        margin: auto;
      }

      .email-footer ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: auto;
      }

      .email-footer ul li a {
        color: rgb(61, 61, 61);
        font-size: 20px;
        transition: all 0.3s ease-in-out;
      }

      .email-footer img {
        width: 30px;
      }

      .email-footer ul li a:hover {
        color: rgb(7, 7, 7);
      }

      .signature_style {
        font-style: italic;
      }

      @media screen and (max-width: 768px) {
        .email-container {
          max-width: 100%;
        }

        .email-header {
          font-size: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="main_body">
      <div class="image_logo">
            <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
      </div>
      <div class="email-container">
        <div class="email-header">
          <h1>Welcome to the Dibo Ruwa Family!</h1>
        </div>
        <div class="email-content">
          <p>
            Hello
            <strong> ${data.customerName} </strong>
            ,
          </p>
          <p>
            You&apos;ve made a fantastic decision! Welcome to the Dibo Ruwa
            family, where convenience meets quality. Whether you&apos;re here
            for our mouth-watering meals, impeccable cleaning, or our premium
            laundry services, we promise to deliver the best.
          </p>
          <p>
            A big thank you for joining us! If you have any questions or need
            assistance, our team is here to help.
          </p>
          <p>Cheers to an easier life with Dibo Ruwa!</p>
          <p class="signature_style">
            Warm Regards, <br />
            The Dibo Ruwa Team
          </p>
        </div>
      </div>
      <div class="email-footer">
        <p>Follow us on social media:</p>
        <ul class="social-icons">
          <li>
            <a href="https://example.com/facebook" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="facebook_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/twitter" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                alt="twitter_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/instagram" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram_logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>

  `;
}

export function NewPartnerAdminNotification(data: any) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .main_body {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        padding: 50px 20px;
        background-color: rgba(0, 119, 184, 0.226);
        gap: 30px;
        line-height: 1.3;
      }
      p {
        margin-bottom: 10px;
      }

      .image_logo {
        margin-bottom: 20px;
        text-align: center;
      }

      .image_logo img {
        width: 100px;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
      }
      .email-header {
        background-color: #0077b6;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        font-size: 13px;
      }
      .email-content {
        background-color: #ffffff;
        padding: 30px;
      }

      .email-content ul {
        list-style-type: none;
        
        margin: 20px;
      }

      .email-content ul li {
        margin-bottom: 10px;
      }

      button {
        background-color: #0077b6;
        color: #fff;
        padding: 12px 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        margin: 10px 0;
        display: block;
        width: max-content;
      }

      .email-footer {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        margin: 20px auto;
        width: 100%;
      }

      .email-footer p {
        text-align: center;
        margin: auto;
      }

      .email-footer ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: auto;
      }

      .email-footer ul li a {
        color: rgb(61, 61, 61);
        font-size: 20px;
        transition: all 0.3s ease-in-out;
      }

      .email-footer img {
        width: 30px;
      }

      .email-footer ul li a:hover {
        color: rgb(7, 7, 7);
      }

      .signature_style {
        font-style: italic;
      }

      @media screen and (max-width: 768px) {
        .email-container {
          max-width: 100%;
        }

        .email-header {
          font-size: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="main_body">
      <div class="image_logo">
            <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
      </div>
      <div class="email-container">
        <div class="email-header">
          <h1> New Partner Notification!!!</h1>
        </div>
        <div class="email-content">
          <p>Hey <strong>${data.adminFirstName}</strong>,</p>
          <p>
            We have some exciting news to share - a new partner has registered
            with us! Here are the preliminary details:
          </p>
          <ul class="list">
            <li>
              <strong> Partner Name:</strong>
              ${data.partnerFullName}
            </li>
            <li>
              <strong> Business Name:</strong>
              ${data.partnerBusinessName}
            </li>
            <li>
              <strong> Contact Information:</strong>
              ${data.partnerContactInfo}
            </li>
            <li>
              <strong> Registration Date:</strong>
              ${data.registrationDate}
            </li>
          </ul>
          <p>
            To facilitate a smooth onboarding process, could you please review
            the details and activate their account? In case any technical
            assistance is required, feel free to coordinate with the technical
            team.
          </p>
          <p>
            Thank you for ensuring a seamless integration process for our new
            partners.
          </p>
          <p class="signature_style">
            Warm Regards, <br />
            The Dibo Ruwa Team
          </p>
        </div>
      </div>
      <div class="email-footer">
        <p>Follow us on social media:</p>
        <ul class="social-icons">
          <li>
            <a href="https://example.com/facebook" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="facebook_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/twitter" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                alt="twitter_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/instagram" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram_logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>

  `;
}

export function NewPartnerNotification(data: any) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .main_body {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        padding: 50px 20px;
        background-color: rgba(0, 119, 184, 0.226);
        gap: 30px;
        line-height: 1.3;
      }
      p {
        margin-bottom: 10px;
      }

      .image_logo {
        margin-bottom: 20px;
        text-align: center;
      }

      .image_logo img {
        width: 100px;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
      }
      .email-header {
        background-color: #0077b6;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        font-size: 13px;
      }
      .email-content {
        background-color: #ffffff;
        padding: 30px;
      }

      .email-content ul {
        list-style-type: none;

        margin: 20px;
      }

      .email-content ul li {
        margin-bottom: 10px;
      }

      button {
        background-color: #0077b6;
        color: #fff;
        padding: 12px 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        margin: 10px 0;
        display: block;
        width: max-content;
      }

      .email-footer {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        margin: 20px auto;
        width: 100%;
      }

      .email-footer p {
        text-align: center;
        margin: auto;
      }

      .email-footer ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: auto;
      }

      .email-footer ul li a {
        color: rgb(61, 61, 61);
        font-size: 20px;
        transition: all 0.3s ease-in-out;
      }

      .email-footer img {
        width: 30px;
      }

      .email-footer ul li a:hover {
        color: rgb(7, 7, 7);
      }

      .signature_style {
        font-style: italic;
      }

      @media screen and (max-width: 768px) {
        .email-container {
          max-width: 100%;
        }

        .email-header {
          font-size: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="main_body">
      <div class="image_logo">
            <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
      </div>
      <div class="email-container">
        <div class="email-header">
          <h1>Welcome to the Dibo Ruwa Family!</h1>
        </div>
        <div class="email-content">
          <p>Hello <strong>${data.partnerFirstName}</strong>,</p>
          <p>Warm greetings from Dibo Ruwa!</p>
          <p>
            We are thrilled to have you onboard as our latest partner. Dibo Ruwa
            prides itself on building lasting partnerships, offering top-quality
            services, and emphasizing environmental sustainability.
          </p>
          <h4>Here&#39;s what you can expect next:</h4>
          <ul>
            <li>
              <strong> Onboarding Session:</strong>
              Our team will reach out soon to schedule an orientation, where
              we&#39;ll walk you through our platform and answer any questions
              you might have.
            </li>
            <li>
              <strong>Access to Resources:</strong>
              You will have access to our suite of partner resources to make our
              collaboration seamless.
            </li>
            <li>
              <strong>Continuous Support:</strong>
              Our dedicated support team is here to assist you at any step of
              the way. Should you have any technical queries, they&#39;re just a
              call or email away.
            </li>
          </ul>
          <p>
            In the meantime, please ensure that all your details with us are
            accurate. This helps in fostering a smooth working relationship.
          </p>
          <p>
            Welcome to our community! We&#39;re confident that together,
            we&#39;ll create exceptional experiences for our customers and bring
            forward the spirit of innovation and sustainability that defines
            Dibo Ruwa.
          </p>
          <p>Looking forward to a fruitful association.</p>
          <p class="signature_style">
            Warm Regards, <br />
            The Dibo Ruwa Team
          </p>
        </div>
      </div>
      <div class="email-footer">
        <p>Follow us on social media:</p>
        <ul class="social-icons">
          <li>
            <a href="https://example.com/facebook" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="facebook_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/twitter" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                alt="twitter_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/instagram" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram_logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>

  `;
}

export function PartnerVrification(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        a {text-decoration: none;}
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>Verification Successful!</h1>
          </div>
          <div class="email-content">
            <p>Hello <strong>${data.partnerFirstName}</strong> ,</p>
            <p>
              Great news! Your partnership verification with Dibo Ruwa is now
              complete. We&#39;re excited to have you on board and can&#39;t wait
              to see all the incredible value you&#39;ll bring to our platform.
            </p>
            <p>
              Now that you&#39;re verified, you can sign in to your partner
              dashboard to start managing and fulfilling orders seamlessly.
            </p>
            <a href="${data.signInLink}">
              <button>Sign In to Your Dashboard</button>
            </a>
            <p>
              <strong> Note:</strong>
              <em>
                The button will contain a direct link to the partner&#39;s
                dashboard/sign-in page.
              </em>
            </p>
            <p>
              If you encounter any challenges or have questions about using the
              dashboard, our support team is here to assist you. Contact us at
              ${data.supportEmail} or ${data.supportPhoneNumber}.
            </p>
            <p>
              Welcome to the Dibo Ruwa family. Let&#39;s create amazing
              experiences together!
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function OrderConfirmation(data: any) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .main_body {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        padding: 50px 20px;
        background-color: rgba(0, 119, 184, 0.226);
        gap: 30px;
        line-height: 1.3;
      }
      p {
        margin-bottom: 10px;
      }

      .image_logo {
        margin-bottom: 20px;
        text-align: center;
      }

      .image_logo img {
        width: 100px;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
      }
      .email-header {
        background-color: #0077b6;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        font-size: 13px;
      }
      .email-content {
        background-color: #ffffff;
        padding: 30px;
      }

      .table_container {
        width: 100%;
        overflow: scroll;
      }

      .email-content ul {
        list-style-type: none;

        margin: 20px;
      }

      .email-content ul li {
        margin-bottom: 10px;
      }

      button {
        background-color: #0077b6;
        color: #fff;
        padding: 12px 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        margin: 10px 0;
        display: block;
        width: max-content;
      }

      .email-footer {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        margin: 20px auto;
        width: 100%;
      }

      .email-footer p {
        text-align: center;
        margin: auto;
      }

      .table-container {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr 1fr; */
        border: 2px solid #0077b6;
        width: max-content;
      }

      .table-header {
        background: #0077b6;
        color: #fff;
        font-size: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      .table-cell {
        padding: 7px;
        text-align: center;
        border: 1px solid #0077b6;
      }

      .table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
      }

      /* Add more styling as needed */

      a {
        text-decoration: none;
      }

      .email-footer ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: auto;
      }

      .email-footer ul li a {
        color: rgb(61, 61, 61);
        font-size: 20px;
        transition: all 0.3s ease-in-out;
      }

      .email-footer img {
        width: 30px;
      }

      .email-footer ul li a:hover {
        color: rgb(7, 7, 7);
      }

      .signature_style {
        font-style: italic;
      }

      @media screen and (max-width: 768px) {
        .email-container {
          max-width: 100%;
        }
        .table_container {
          width: 50%;
          overflow: scroll;
        }

        .email-header {
          font-size: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="main_body">
      <div class="image_logo">
            <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
      </div>
      <div class="email-container">
        <div class="email-header">
          <h1>New Order Received!!!</h1>
        </div>
        <div class="email-content">
        <p>
        Hello
        <strong>
          ${data.customerName}
        </strong>
        ,
      </p>
      <p>
        Thank you for your order! We&#39;ve received your payment and your
        items are now being prepared.
      </p>

          <h3>Order Details:</h3>

         
            <p><strong>Order ID: </strong>#${data.orderNumber}</p>
            <div class="table_container">
              <strong>items ordered:</strong>
              <ul >
                ${data.itemsOrdered.map((item: any) => {
                  return `
                  <li>
                  <div key="${item._id}">
                    ${item.title} - $${item.price} - ${item.quantity} 
                  </div>
                </li>`;
                })}
              </ul>
            </div>
            <p>
            
            <strong>Total Amount:</strong> ${data.total}
          </p>
          <p>
           
            <strong>Estimated Delivery Time:</strong> ${data.estimatedDeliveryTime}
          </p>
          <p>Sit back and relax, your items are on their way!</p>
          <p class="signature_style">
            Warm Regards, <br />
            The Dibo Ruwa Team
          </p>
        </div>
      </div>
      <div class="email-footer">
        <p>Follow us on social media:</p>
        <ul class="social-icons">
          <li>
            <a href="https://example.com/facebook" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="facebook_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/twitter" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                alt="twitter_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/instagram" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram_logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>

  `;
}

export function PartnerOrderNotification(data: any) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .main_body {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        padding: 50px 20px;
        background-color: rgba(0, 119, 184, 0.226);
        gap: 30px;
        line-height: 1.3;
      }
      p {
        margin-bottom: 10px;
      }

      .image_logo {
        margin-bottom: 20px;
        text-align: center;
      }

      .image_logo img {
        width: 100px;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
      }
      .email-header {
        background-color: #0077b6;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        font-size: 13px;
      }
      .email-content {
        background-color: #ffffff;
        padding: 30px;
      }

      .table_container {
        width: 100%;
        overflow: scroll;
      }

      .email-content ul {
        list-style-type: none;

        margin: 20px;
      }

      .email-content ul li {
        margin-bottom: 10px;
      }

      button {
        background-color: #0077b6;
        color: #fff;
        padding: 12px 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        margin: 10px 0;
        display: block;
        width: max-content;
      }

      .email-footer {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        margin: 20px auto;
        width: 100%;
      }

      .email-footer p {
        text-align: center;
        margin: auto;
      }

      .table-container {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr 1fr; */
        border: 2px solid #0077b6;
        width: max-content;
      }

      .table-header {
        background: #0077b6;
        color: #fff;
        font-size: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      .table-cell {
        padding: 7px;
        text-align: center;
        border: 1px solid #0077b6;
      }

      .table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
      }

      /* Add more styling as needed */

      a {
        text-decoration: none;
      }

      .email-footer ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: auto;
      }

      .email-footer ul li a {
        color: rgb(61, 61, 61);
        font-size: 20px;
        transition: all 0.3s ease-in-out;
      }

      .email-footer img {
        width: 30px;
      }

      .email-footer ul li a:hover {
        color: rgb(7, 7, 7);
      }

      .signature_style {
        font-style: italic;
      }

      @media screen and (max-width: 768px) {
        .email-container {
          max-width: 100%;
        }
        .table_container {
          width: 50%;
          overflow: scroll;
        }

        .email-header {
          font-size: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="main_body">
      <div class="image_logo">
            <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
      </div>
      <div class="email-container">
        <div class="email-header">
          <h1>New Order Received!!!</h1>
        </div>
        <div class="email-content">
          <p>
            Hello
            <strong> ${data.partnerFirstName} </strong>
            ,,
          </p>
          <p>
            Good news! You&#39;ve received a new order from {customerFullName}.
          </p>

          <h3>Order Details:</h3>

          <ul>
            <li>
              <strong> Customer Name:</strong>
              ${data.customerFullName}
            </li>
            <li><strong>Order ID: </strong>#${data.orderNumber}</li>
            <li class="table_container">
              <strong>items ordered:</strong>
              <ul >
                ${data.itemsOrdered.map((item: any) => {
                  return `
                  <li>
                  <div key="${item._id}">
                    ${item.title} - ₦${item.price} - ${item.quantity} -
                    ₦${item.total}
                  </div>
                </li>`;
                })}
              </ul>
            </li>
            <li>
              <strong> Total Amount:</strong>
              ₦${data.totalAmount}
            </li>
            <li>
              <strong> Delivery Address:</strong>
              ${data.customerAddress}
            </li>
            <li>
              <strong>Order Date & Time:</strong>
              ${data.orderTimestamp}
            </li>
          </ul>
          <a href="${data.orderLink}">
            <button>View & Manage Order</button>
          </a>
          <p>
            <strong>Note:</strong>
            <em>The button links directly to the order in your dashboard.</em>
          </p>
          <p>
            For any queries or assistance, feel free to reach out to our support
            team.
          </p>
          <p class="signature_style">
            Warm Regards, <br />
            The Dibo Ruwa Team
          </p>
        </div>
      </div>
      <div class="email-footer">
        <p>Follow us on social media:</p>
        <ul class="social-icons">
          <li>
            <a href="https://example.com/facebook" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="facebook_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/twitter" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                alt="twitter_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/instagram" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram_logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>

  `;
}

export function AdminOrderNotification(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>New Order Received!!!</h1>
          </div>
          <div class="email-content">
            <p>Admin Team,</p>
            <p>
              We&#39;ve received a new order placed by
              <strong> ${
                data.customerFullName
              }</strong> and it has been assigned
              to <strong>${data.partnerFullName}</strong> for fulfillment.
            </p>
  
            <h3>Order Summary:</h3>
  
            <ul>
              <li>
                <strong> Customer Name:</strong>
                ${data.customerFullName}
              </li>
              <li><strong>Order ID: </strong>#${data.orderNumber}</li>
              <li class="table_container">
                <strong>items ordered:</strong>
                <ul>
                  ${data.itemsOrdered.map((item: any) => {
                    return `
                  <li>
                    <div key="${item._id}">
                      ${item.title} - ₦${item.price} - ${item.quantity} -
                      ₦${item.total}
                    </div>
                  </li>
                  `;
                  })}
                </ul>
              </li>
              <li>
                <strong> Total Amount:</strong>
                ₦${data.totalAmount}
              </li>
              <li>
                <strong>Delivery Address: </strong>
                ${data.customerAddress}
              </li>
              <li>
                <strong> Assigned Partner:</strong>
                ${data.partnerFullName}
              </li>
              <li>
                <strong> Order Date & Time:</strong>
                ${data.orderTimestamp}
              </li>
            </ul>
            <a href="${data.adminDashboardLink}">
              <button>Access Admin Dashboard</button>
            </a>
            <p>
              <strong>Note:</strong>
              <em>
                The button links directly to the order in the admin dashboard.
              </em>
            </p>
            <p>
              Thank you for ensuring our customers receive the best service
              possible.
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function AdminOrderCancelNotification(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>Order Cancelled by Partner - Immediate Action Required</h1>
          </div>
          <div class="email-content">
            <p>Dear Admin Team,</p>
            <p>
              We wish to bring to your attention that Order ID
              <strong>#${data.orderNumber} </strong> has been cancelled by our
              partner, <strong>${data.partnerFullName}</strong> . This order
              requires immediate reassignment to ensure our customer receives
              their order in a timely manner.
            </p>
  
            <h3>Order Summary:</h3>
  
            <ul>
              <li>
                <strong> Customer Name:</strong>
                ${data.customerFullName}
              </li>
              <li><strong>Order ID: </strong>#${data.orderNumber}</li>
              <li class="table_container">
                <strong>items ordered:</strong>
                <ul>
                  ${data.itemsOrdered.map((item: any) => {
                    return `
                  <li>
                    <div key="${item._id}">
                      ${item.title} - ₦${item.price} - ${item.quantity} -
                      ₦${item.total}
                    </div>
                  </li>
                  `;
                  })}
                </ul>
              </li>
              <li>
                <strong> Total Amount:</strong>
                ₦${data.totalAmount}
              </li>
              <li>
                <strong>Delivery Address: </strong>
                ${data.customerAddress}
              </li>
              <li>
                <strong> Original Partner:</strong>
                ${data.partnerFullName}
              </li>
              <li>
                <strong> Order Date & Time:</strong>
                ${data.orderTimestamp}
              </li>
            </ul>
            <a href="${data.adminDashboardLink}">
              <button>Reassign Order in Admin Dashboard</button>
            </a>
            <p>
              <strong>Note:</strong>
              <em>
                The button links directly to the order in the admin dashboard.
              </em>
            </p>
            <p>
              Thank you for ensuring our customers receive the best service
              possible.
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function PartnerOrderAssignment(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>New Order Assigned to You!!!</h1>
          </div>
          <div class="email-content">
            <p>
              Hello
              <strong> ${data.partnerFirstName} </strong>
            </p>
            <p>
              We are reaching out to inform you that a new order has been assigned
              to you. Please review the details below and ensure timely
              fulfillment to uphold our commitment to customer satisfaction.
            </p>
  
            <h3>Order Summary:</h3>
  
            <ul>
              <li>
                <strong> Customer Name:</strong>
                ${data.customerFullName}
              </li>
              <li><strong>Order ID: </strong>#${data.orderNumber}</li>
              <li class="table_container">
                <strong>items ordered:</strong>
                <ul>
                  ${data.itemsOrdered.map((item: any) => {
                    return `
                  <li>
                    <div key="${item._id}">
                      ${item.title} - ₦${item.price} - ${item.quantity} -
                      ₦${item.total}
                    </div>
                  </li>
                  `;
                  })}
                </ul>
              </li>
              <li><strong>Total Amount:</strong> ₦${data.totalAmount}</li>
              <li><strong>Delivery Address:</strong> ${
                data.customerAddress
              }</li>
              <li><strong>Order Date & Time:</strong> ${
                data.orderTimestamp
              }</li>
            </ul>
            <a href="${data.partnerDashboardLink}">
              <button>View & Manage Order</button>
            </a>
            <p>
              Note: The button will direct you to the specific order in your
              dashboard.
            </p>
            <p>
              If you encounter any challenges or require assistance, do not
              hesitate to contact our admin team. We&#39;re here to support you
              every step of the way.
            </p>
            <p>
              Thank you for your dedication and hard work. Together, we continue
              to provide exceptional service to our valued customers.
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function DispatchStatus(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1> Your Order #${data.orderNumber} Has Been Dispatched!!</h1>
          </div>
          <div class="email-content">
          <p>
          Dear
          <strong >
            ${data.customerFirstName}
          </strong>
          ,
        </p>
        <p>
          Great news! Your order with Dibo Ruwa has been dispatched and is on
          its way to you!
        </p>
  
            <h3>Order Summary:</h3>
  
            <ul>
              <li>
                <strong> Customer Name:</strong>
                ${data.customerFullName}
              </li>
              <li><strong>Order ID: </strong>#${data.orderNumber}</li>
              <li class="table_container">
                <strong>items ordered:</strong>
                <ul>
                  ${data.itemsOrdered.map((item: any) => {
                    return `
                  <li>
                    <div key="${item._id}">
                      ${item.title} - ₦${item.price} - ${item.quantity} -
                      ₦${item.total}
                    </div>
                  </li>
                  `;
                  })}
                </ul>
              </li>
              <li><strong>Total Amount:</strong> ₦${data.totalAmount}</li>
              <li> <strong>Estimated Delivery Date:</strong> ${
                data.estimatedDeliveryDate
              }</li>
            </ul>
            <p>
              
              <strong>Note:</strong>
              <em>The button links directly to a feedback form or page.</em>
            </p>
            <p>
              For any queries, concerns, or further assistance, please don&#39;t
              hesitate to contact us at ${
                data.contactNumber
              }. We&#39;re always here to
              help.
            </p>
            <p>
              Thank you for choosing Dibo Ruwa, and we look forward to serving you
              again!
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function DeliveredStatus(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1> Your Order #${data.orderNumber} Has Been Delivered!</h1>
          </div>
          <div class="email-content">
            <p>
              Dear
              <strong> ${data.customerFirstName} </strong>
              ,
            </p>
            <p>
              We&#39;re pleased to inform you that your order from Dibo Ruwa has
              been successfully delivered. We hope everything is in order and up
              to your expectations!
            </p>
  
            <h3>Order Summary:</h3>
  
            <ul>
              <li>
                <strong> Customer Name:</strong>
                ${data.customerFullName}
              </li>
              <li><strong>Order ID: </strong>#${data.orderNumber}</li>
              <li class="table_container">
                <strong>items ordered:</strong>
                <ul>
                  ${data.itemsOrdered.map((item: any) => {
                    return `
                  <li>
                    <div key="${item._id}">
                      ${item.title} - ₦${item.price} - ${item.quantity} -
                      ₦${item.total}
                    </div>
                  </li>
                  `;
                  })}
                </ul>
              </li>
              <li><strong>Total Amount:</strong> ₦${data.totalAmount}</li>
              <li><strong>Delivery Date:</strong> ${data.deliveryDate}</li>
            </ul>
            <p>
              
              <strong>Note:</strong>
              <em>The button links directly to a feedback form or page.</em>
            </p>
            <p>
              For any queries, concerns, or further assistance, please don&#39;t
              hesitate to contact us at ${
                data.contactNumber
              }. We&#39;re always here to
              help.
            </p>
            <p>
              Thank you for choosing Dibo Ruwa, and we look forward to serving you
              again!
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function UserQuoteRequestConfirmation(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>Request confirmation!</h1>
          </div>
          <div class="email-content">
            <p>
              Hello
              <strong>${data.firstName}</strong>,
            </p>
            <p>
              Thank you for expressing interest in our ${
                data.serviceType
              } services.
              We&#39;ve received your request for a quote and are currently
              reviewing the details.
            </p>
            <h3>Your Request Details:</h3>
            <ul>
              <li><strong>Service Type:</strong> ${data.serviceType}</li>
              <strong>items ordered:</strong>
                <ul >
                  ${data.items.map((item: any) => {
                    return `
                    <li>
                    <div key="${item._id}">
                      ${item.name} - ${item.amount} 
                    </div>
                  </li>`;
                  })}
                </ul>
              <li><strong>Request Date & Time:</strong> ${data.timestamp}</li>
            </ul>
            <p>
              Our team is committed to providing you with a comprehensive and
              competitive quote. You can expect to hear back from us within
              <strong>${data.turnaroundTime}</strong>.
            </p>
            <p>
              If you have any immediate questions or require further information,
              please don&#39;t hesitate to contact us at
              <strong>${data.adminContact}</strong>.
            </p>
            <p>
              Thank you for considering Dibo Ruwa for your
              <strong>${
                data.serviceType
              }</strong> needs. We&#39;re eager to serve you!
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}


export function AdminQuoteResponse(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
        <div class="email-header">
        <h1>Quote Response</h1>
      </div>
      <div class="email-content">
        <p>
          Hello <strong>${data.firstName}</strong>,
        </p>
        <p>
          Thank you for considering Dibo Ruwa for your <strong>${data.serviceType}</strong> needs.
          We appreciate your interest and have prepared a quote for your request.
        </p>
        <h3>Quote Details:</h3>
        <ul>
          <li><strong>Service Type:</strong> ${data.serviceType}</li>
          <li><strong>Request Date & Time:</strong> ${data.timestamp}</li>
        </ul>
        
        <h3>Items Ordered:</h3>
        <ul>
          ${data.items.map((item: any) => {
            return `
            <li>
              <div key="${item._id}">
                ${item.name} - ${item.amount}
              </div>
            </li>`;
          })}
        </ul>
    
        <p>
          <strong>Total:</strong> ₦${data.total} 
        </p>
        
        <p>
          We've calculated the total cost for the items you've ordered. If you have any questions or require further details, please don't hesitate to contact us at <strong>${data.adminContact}</strong>.
        </p>
    
        <p>
          We look forward to serving you and appreciate the opportunity to work with you.
        </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function AdminLaundryQuoteRequest(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>New Laundry Request</h1>
          </div>
          <div class="email-content">
            <p>
              Hello
              <strong>${data.adminName}</strong>,
            </p>
            <p>
              We&#39;ve received a new quote request for laundry services from
              ${data.userName}, with the following details:
            </p>
            <h3>Customer Information:</h3>
            <ul>
              <li><strong>Name:</strong> ${data.userName}</li>
              <li><strong>Email:</strong> ${data.userEmail}</li>
              <li><strong>Contact Number: </strong> ${data.userContact}</li>
              <li><strong>Address:</strong> ${data.userAddress}</li>
            </ul>
            <h4>Laundry Items for Quotation:</h4>
            <ul>
              ${data.laundryItems.map((item: any, index: any) => {
                return `
              <li key="${index}">${item.name} - ${item.amount}</li>
              `;
              })}
            </ul>
            <p>
              Please prepare a quote for the above-mentioned items and send it to
              the customer at the earliest convenience.
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function AdminHomeCleaningQuoteRequest(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>New Cleaning Request!</h1>
          </div>
          <div class="email-content">
            <p>
              Hello
              <strong>${data.adminName}</strong>,
            </p>
            <p>
              We&#39;ve received a new quote request for home cleaning services
              from ${data.userName}, with the following details:
            </p>
            <h3>Customer Information:</h3>
            <ul>
              <li><strong>Name:</strong> ${data.userName}</li>
              <li><strong>Email:</strong> ${data.userEmail}</li>
              <li><strong>Contact Number:</strong> ${data.userContact}</li>
              <li><strong>Address:</strong> ${data.userAddress}</li>
              <li>
                <strong>Areas/Items for Home Cleaning Quotation:</strong>
                <ul>
                  ${data.homeCleaningAreas.map((area: any, index: any) => {
                    return;
                    `
                  <li key="${index}">${area.name} - ${area.amount}</li>
                  `;
                  })}
                </ul>
              </li>
            </ul>
  
            <p>
              Please prepare a quote for the above-mentioned areas/items and send
              it to the customer at the earliest convenience.
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function MovingRequestEmail(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>New Moving Request!</h1>
          </div>
          <div class="email-content">
            <p>Hello Admin,</p>
            <p>
              We have received a new moving request from the website. Please find
              the details below:
            </p>
            <h3>Customer Information:</h3>
            <ul >
              <li>
               
                <strong>Name:</strong> ${data.customerName}
              </li>
              <li>
                <strong>Email Address: </strong> ${data.customerEmail}
              </li>
              <li>
                <strong>Phone Number: </strong> ${data.customerPhone}
              </li>
              <li>
                <strong>Current Address: </strong> ${data.currentAddress}
              </li>
              <li>
               
                <strong>Destination Address:</strong> ${data.destinationAddress}
              </li>
              <li>
               
                <strong>Preferred Moving Date:</strong> ${data.preferredDate}
              </li>
            </ul>
            ${
              data.items.length > 0 &&
              ` <>
                <p>List of Items for Moving:</p>
                <ul>
                  ${data.items.map((item: any, index: any) => {
                    return `
                      <li key="${index}">${item}</li>
                      `;
                  })}
                </ul>
              </>`
            }
            {specialInstructions && (
              <p>Special Instructions: {specialInstructions}</p>
            )} 
            <p>
              Please ensure that the moving team is informed and a quote is prepared
              for the customer based on the details provided. It would be prudent to
              reach out to the customer as soon as possible to confirm details,
              provide the quote, and schedule the move.
            </p>
            <p>Thank you,</p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function SubscriptionConfirmationEmail(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>Your Subscription with Dibo Ruwa is Confirmed!</h1>
          </div>
          <div class="email-content">
            <p>
              Hello
              <strong> ${data.customerName} </strong>
              ,
            </p>
            <p>
              Great choice! We&#39;re thrilled to have you onboard. Your
              subscription for ${data.serviceName} is now confirmed. Get ready for
              a hassle-free and delightful experience.
            </p>
            <h3>Details:</h3>
            <ul>
              <li><strong>Service:</strong> ${data.serviceName}</li>
              <li><strong>Plan:</strong> ${data.planName}</li>
              <li>
                <strong> Subscription Period:</strong> ${data.startDate} -
                ${data.endDate}
              </li>
            </ul>
            <p>
              Thank you for trusting Dibo Ruwa. We&#39;re excited to serve you!
            </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function AdminSubscriptionNotification(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
  
        .main_body {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
          padding: 50px 20px;
          background-color: rgba(0, 119, 184, 0.226);
          gap: 30px;
          line-height: 1.3;
        }
        p {
          margin-bottom: 10px;
        }
  
        .image_logo {
          margin-bottom: 20px;
          text-align: center;
        }
  
        .image_logo img {
          width: 100px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .email-header {
          background-color: #0077b6;
          color: #ffffff;
          text-align: center;
          padding: 10px;
          font-size: 13px;
        }
        .email-content {
          background-color: #ffffff;
          padding: 30px;
        }
  
        .table_container {
          width: 100%;
          overflow: scroll;
        }
  
        .email-content ul {
          list-style-type: none;
  
          margin: 20px;
        }
  
        .email-content ul li {
          margin-bottom: 10px;
        }
  
        button {
          background-color: #0077b6;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          margin: 10px 0;
          display: block;
          width: max-content;
        }
  
        .email-footer {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin: 20px auto;
          width: 100%;
        }
  
        .email-footer p {
          text-align: center;
          margin: auto;
        }
  
        .table-container {
          display: grid;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          border: 2px solid #0077b6;
          width: max-content;
        }
  
        .table-header {
          background: #0077b6;
          color: #fff;
          font-size: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
  
        .table-cell {
          padding: 7px;
          text-align: center;
          border: 1px solid #0077b6;
        }
  
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
  
        /* Add more styling as needed */
  
        a {
          text-decoration: none;
        }
  
        .email-footer ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: auto;
        }
  
        .email-footer ul li a {
          color: rgb(61, 61, 61);
          font-size: 20px;
          transition: all 0.3s ease-in-out;
        }
  
        .email-footer img {
          width: 30px;
        }
  
        .email-footer ul li a:hover {
          color: rgb(7, 7, 7);
        }
  
        .signature_style {
          font-style: italic;
        }
  
        @media screen and (max-width: 768px) {
          .email-container {
            max-width: 100%;
          }
          .table_container {
            width: 50%;
            overflow: scroll;
          }
  
          .email-header {
            font-size: 12px;
          }
        }
      </style>
    </head>
    <body>
      <div class="main_body">
        <div class="image_logo">
              <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
        </div>
        <div class="email-container">
          <div class="email-header">
            <h1>New Subscription</h1>
          </div>
          <div class="email-content">
          <p>
          Hello Admin,
      </p>
      <p>
          You have a new subscription request for your service. Here are the details:
      </p>
      <h3>Subscription Details:</h3>
      <ul>
          <li><strong>Customer Name:</strong> ${data.customerName}</li>
          <li><strong>Service Name:</strong> ${data.serviceName}</li>
          <li><strong>Plan Name:</strong> ${data.planName}</li>
          <li><strong>Start Date:</strong> ${data.startDate}</li>
          <li><strong>End Date:</strong> ${data.endDate}</li>
      </ul>
      <p>
          Please review this subscription and take any necessary action.
      </p>
            <p class="signature_style">
              Warm Regards, <br />
              The Dibo Ruwa Team
            </p>
          </div>
        </div>
        <div class="email-footer">
          <p>Follow us on social media:</p>
          <ul class="social-icons">
            <li>
              <a href="https://example.com/facebook" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="facebook_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/twitter" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="twitter_logo"
                />
              </a>
            </li>
            <li>
              <a href="https://example.com/instagram" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="instagram_logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  
  `;
}

export function PasswordRecorvery(data: any) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .main_body {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        padding: 50px 20px;
        background-color: rgba(0, 119, 184, 0.226);
        gap: 30px;
        line-height: 1.3;
      }
      p {
        margin-bottom: 10px;
      }

      .image_logo {
        margin-bottom: 20px;
        text-align: center;
      }

      .image_logo img {
        width: 100px;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
      }
      .email-header {
        background-color: #0077b6;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        font-size: 13px;
      }
      .email-content {
        background-color: #ffffff;
        padding: 30px;
      }

      .table_container {
        width: 100%;
        overflow: scroll;
      }

      .email-content ul {
        list-style-type: none;

        margin: 20px;
      }

      .email-content ul li {
        margin-bottom: 10px;
      }

      button {
        background-color: #0077b6;
        color: #fff;
        padding: 12px 25px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        margin: 10px 0;
        display: block;
        width: max-content;
      }

      .email-footer {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        margin: 20px auto;
        width: 100%;
      }

      .email-footer p {
        text-align: center;
        margin: auto;
      }

      .table-container {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr 1fr; */
        border: 2px solid #0077b6;
        width: max-content;
      }

      .table-header {
        background: #0077b6;
        color: #fff;
        font-size: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      .table-cell {
        padding: 7px;
        text-align: center;
        border: 1px solid #0077b6;
      }

      .table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
      }

      /* Add more styling as needed */

      a {
        text-decoration: none;
      }

      .email-footer ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: auto;
      }

      .email-footer ul li a {
        color: rgb(61, 61, 61);
        font-size: 20px;
        transition: all 0.3s ease-in-out;
      }

      .email-footer img {
        width: 30px;
      }

      .email-footer ul li a:hover {
        color: rgb(7, 7, 7);
      }

      .signature_style {
        font-style: italic;
      }

      @media screen and (max-width: 768px) {
        .email-container {
          max-width: 100%;
        }
        .table_container {
          width: 50%;
          overflow: scroll;
        }

        .email-header {
          font-size: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="main_body">
      <div class="image_logo">
            <img src="https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698603012/Deck%20assets/comp_logo_l2_1_fky59a.png" alt="company_logo" />
      </div>
      <div class="email-container">
        <div class="email-header">
          <h1>Your Subscription with Dibo Ruwa is Confirmed!</h1>
        </div>
        <div class="email-content">
          <p>Hello ${data.userName},</p>
          <p>
            We received a request to reset your password for your Dibo Ruwa
            account. If you didn&#39;t make this request, please ignore this
            email.
          </p>
          <p>To set a new password, click the link below:</p>
  
          <a href="${data.passwordResetLink}">
            <button >Reset Password</button>
          </a>
  
          <p>
            This link will expire in 24 hours, so be sure to use it right away.
          </p>
          <p>
            Stay safe, and always ensure you use a strong, unique password for
            your accounts.
          </p>
          <p class="signature_style">
            Warm Regards, <br />
            The Dibo Ruwa Team
          </p>
        </div>
      </div>
      <div class="email-footer">
        <p>Follow us on social media:</p>
        <ul class="social-icons">
          <li>
            <a href="https://example.com/facebook" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="facebook_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/twitter" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                alt="twitter_logo"
              />
            </a>
          </li>
          <li>
            <a href="https://example.com/instagram" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                alt="instagram_logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>

  `;
}
