import nodemailer from 'nodemailer';

export const sendScheduleEmail = (start, end, email) => {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'z3phyronsnides@gmail.com',
              pass: 'Eseohe1798?',
            },
          });
        
          const mailOptions = {
            from: 'info@dibowura.com',
            to: email, //use ese's email
            subject: 'Your Schedule',
            text: `Your start date is ${start} and your end date is ${end}.`,
          };
        
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        };
        