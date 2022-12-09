const {
  borrowings: Borrowing,
  books: Book,
  users: User,
} = require('../../models');
const apiResponse = require('../../helpers/apiResponse');

module.exports = async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findOne({
      where: { id: bookId },
    });

    const user = await User.findOne({
      where: { id: req.user.id },
    });

    const dueDate = new Date();

    dueDate.setMonth(dueDate.getMonth() + 1);

    const newBorrowing = await Borrowing.create({
      user_id: req.user.id,
      book_id: parseInt(bookId),
      dueDate,
      bookTitle: book.title,
      userEmail: user.email,
    });

    if (newBorrowing) {
      return apiResponse.Created(res, newBorrowing);
    }
  } catch (error) {
    return apiResponse.BadRequest(res, error.message);
  }
};
