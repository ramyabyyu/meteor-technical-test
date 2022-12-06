const { books: Book } = require("../../models");
const apiResponse = require("../../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    const allBooks = await Book.findAll();

    if (allBooks) {
      return apiResponse.Ok(res, allBooks);
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
