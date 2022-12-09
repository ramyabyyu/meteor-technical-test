const { borrowings: Borrowing, users: User } = require('../../models');
const apiResponse = require('../../helpers/apiResponse');

module.exports = async (req, res) => {
  try {
    const allBorrowings = await Borrowing.findAll();

    if (allBorrowings) {
      return apiResponse.Ok(res, allBorrowings);
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
