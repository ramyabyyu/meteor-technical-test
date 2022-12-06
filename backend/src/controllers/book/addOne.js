const { books: Book } = require("../../models");
const apiResponse = require("../../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    const { body } = req;

    const newBook = await Book.create({ ...body });

    if (newBook) {
      return apiResponse.Created(res, newBook);
    }
  } catch (error) {
    return apiResponse.BadRequest(res, error);
  }
};
