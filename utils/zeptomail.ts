// import { SendMailClient } from 'zeptomail';


// // const url = "api.zeptomail.com/v1.1/email/template";
// const url = "https://api.zeptomail.com/v1.1/email";
// const token = "Zoho-enczapikey wSsVR6118kGkC6l9nz2lIuhpzQ9UU1v/RER1iwOk7n7/H6iRpcc8lxCcBgXySPcWEDJsFTNDoep7yUpT2jcGht0omQpUCSiF9mqRe1U4J3x17qnvhDzOXWtYlhSBKIsJxwhjmGVkFMBu";

// // Initialize SendMailClient
// const client = new SendMailClient({
//   url,
//   token
// });

// interface EmailPayload {
//   to: string;
//   customerName: string;
//   activationLink: string;
// }

// const sendZMail = async (to: string, customerName: string, activationLink: string) => {
//   const emailPayload = {
//     bounce_address: "bounces@www.diboruwa.comm",
//     // from: {
//     //   address: "donotreply@teams.diboruwa.com",
//     //   name: "DiboRuwa Team",
//     // },
//     // to: [
//     //   {
//     //     email_address: {
//     //       address: to,
//     //       name: customerName,
//     //     },
//     //   },
//     // ],

//     from: 
//     {
//         address: "noreply@www.diboruwa.com",
//         name: "DiboRuwa Team"
//     },
//     to: 
//     [
//         {
//         email_address: 
//             {
//                 address: to,
//                 name: "Ibrahim"
//             }
//         }
//     ],

//     subject: "Activate Your Account",
//     // mail_template_key: '2d6f.1a69c3700c4e6653.k1.744d64d0-7d8b-11ef-a95c-525400d4bb1c.192385af39d',
//     htmlbody: `<div><b> Test email sent successfully. ${customerName} </b></div>`,

//     // merge_info: {
//     //   customerName,
//     //   activationLink,
//     // },
//     // merge_info: {"activationLink":activationLink,"customerName":customerName},
//   };

//   try {
//     const response = await client.sendMail(emailPayload);
//     console.log('Email sent successfully:', response);
//     return response;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Failed to send email');
//   }
// };

// export default sendZMail;
