const { borrowings: Borrowing, users: User } = require("../../models");
const apiResponse = require("../../helpers/apiResponse");
const sendEmail = require("../../helpers/sendEmail");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatusBorrowing = await Borrowing.update(
      { status },
      { where: { id } }
    );

    const user = await User.findByPk(updateStatusBorrowing.user_id);

    if (updateStatusBorrowing) {
      // Send email to borrower
      const mailDetails = {
        from: process.env.EMAIL_AUTH_USER,
        to: user.email,
        subject: "Your borrowing request has been approved!",
        text: `Hi ${user.fullName}, congratulations! Your book is available on your dashboard. Happy reading!`,
      };

      const send = sendEmail(mailDetails);

      if (send) {
        return apiResponse.Ok(res, "Email has been sent successfully.");
      }
    } else {
      return apiResponse.NotFound(res, "Id not found");
    }
  } catch (error) {}
};
