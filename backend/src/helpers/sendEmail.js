const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL_AUTH_USER, EMAIL_AUTH_PASSWORD } = process.env;

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: EMAIL_AUTH_USER,
    pass: EMAIL_AUTH_PASSWORD,
  },
});

module.exports = async (mailDetails) => {
  try {
    let info = await transporter.sendMail(mailDetails);
    console.log(info.messageId);
    console.log("Success sending an email!");
  } catch (error) {
    console.log("Some errors occured when sending an email!");
  }
};
