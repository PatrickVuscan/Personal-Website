const functions = require("firebase-functions");
// eslint-disable-next-line import/no-unresolved
const { defineSecret } = require("firebase-functions/params");
const nodemailer = require("nodemailer");

// Gmail Auth Keys
const gmailLogin = defineSecret("GMAIL_LOGIN", { description: "My email address." });
const gmailAuth = defineSecret("GMAIL_AUTH", { description: "My auth token from gmail." });

const createFormattedMessage = (email, phoneNumber, message) => {
  const formattedMessage =
`<p style="white-space: pre-wrap">
<strong>From:</strong> ${email || "Not provided"}\n
<strong>Phone Number:</strong> ${phoneNumber || "Not provided"}\n
<strong>Message:</strong>\n${message}</p>`;

  return formattedMessage;
};

const sendEmail = functions
    .runWith({
      secrets: [
        gmailLogin,
        gmailAuth,
      ],
    })
    .https.onCall(
        async ({
          email,
          phoneNumber,
          message,
        }) => {
          const gmailLoginValue = gmailLogin.value();
          const gmailAuthValue = gmailAuth.value();

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: gmailLoginValue,
              pass: gmailAuthValue,
            },
          });

          const subject = "Contact Form Submission from Personal Website";
          const formattedMessage = createFormattedMessage(email, phoneNumber, message);

          const mailOptions = {
            from: gmailLoginValue,
            to: gmailLoginValue,
            subject,
            text: message, // plain text body
            html: formattedMessage, // html body
          };

          try {
            const info = await transporter.sendMail(mailOptions);

            console.log("Message sent: ", info.messageId);

            return { message: formattedMessage };
          } catch (error) {
            console.log("Transporter Callback Error:", error);

            return { error };
          }
        },
    );

module.exports = sendEmail;
