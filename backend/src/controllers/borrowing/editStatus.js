const {
  borrowings: Borrowing,
  users: User,
  books: Book,
} = require('../../models');
require('dotenv').config();
const apiResponse = require('../../helpers/apiResponse');
const sendEmail = require('../../helpers/sendEmail');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatusBorrowing = await Borrowing.update(
      { status },
      { where: { id } }
    );

    if (updateStatusBorrowing) {
      // query borrowing data
      const borrowing = await Borrowing.findByPk(id);

      // query user and book
      const user = await User.findByPk(borrowing.user_id);
      const book = await Book.findByPk(borrowing.book_id);

      // update book isBorrowed if status is approved
      if (status === 'approved') {
        await Book.update(
          { isBorrowed: true },
          { where: { id: borrowing.book_id } }
        );
        await User.update(
          { booksCount: user.bookCount + 1 },
          { where: { id: borrowing.user_id } }
        );
      }

      const declineStatus = {
        subject: 'Sorry, your request has been decline!',
        text: `Hi ${user.fullName}, With this email, we would like to inform you that your request regarding borrowing a book with the title ${book.title} has been rejected by the admin`,
      };

      const approveStatus = {
        subject: 'Your request has been approved!',
        text: `Hi ${user.fullName}, With this email, we would like to inform you that your request regarding borrowing a book with the title ${book.title} on ${borrowing.createdAt} has been approved by the admin. Please check your dashboard and happy reading!`,
      };

      // Send email to borrower
      const mailDetails = {
        from: process.env.EMAIL_AUTH_USER,
        to: user.email,
        subject:
          status === 'approved' ? approveStatus.subject : declineStatus.subject,
        text: status === 'approved' ? approveStatus.text : declineStatus.text,
      };

      await sendEmail(mailDetails);

      return apiResponse.Ok(res, 'Email has been sent successfully');
    } else {
      return apiResponse.NotFound(res, 'Id not found');
    }
  } catch (error) {
    apiResponse.InternalServerError(res, error.message);
  }
};
