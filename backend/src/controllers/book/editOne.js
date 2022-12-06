const { books: Book } = require("../../models");
const apiResponse = require("../../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updateBook = await Book.update({ ...body }, { where: { id } });

    if (updateBook) {
      return apiResponse.Ok(res, updateBook);
    } else {
      return apiResponse.NotFound(res, "Id not found");
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
