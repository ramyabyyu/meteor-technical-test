const { books: Book } = require("../../models");
const apiResponse = require("../../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const oneBook = await Book.findByPk(id);

    if (oneBook) {
      return apiResponse.Ok(res, oneBook);
    } else {
      return apiResponse.NotFound(res, "Id Not Found");
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
