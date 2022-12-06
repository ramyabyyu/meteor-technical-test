const nodemailer = require("nodemailer");
const { EMAIL_AUTH_USER, EMAIL_AUTH_PASSWORD } = process.env;

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_AUTH_USER,
    pass: EMAIL_AUTH_PASSWORD,
  },
});

const sendEmail = (mailDetails) => {
  mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) console.log("Unknown Errors occurs");
    else console.log("Email has been sent successfully");
  });
};

module.exports = sendEmail;
