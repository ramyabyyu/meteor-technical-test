const { borrowings: Borrowing } = require("../../models");
const apiResponse = require("../../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    const { userId, bookId } = req.params;

    const dueDate = new Date();

    dueDate.setMonth(dueDate.getMonth() + 1);

    const newBorrowing = await Borrowing.create({
      user_id: userId,
      book_id: bookId,
      dueDate,
    });

    if (newBorrowing) {
      return apiResponse.Created(res, newBorrowing);
    }
  } catch (error) {
    return apiResponse.BadRequest(res, error);
  }
};
