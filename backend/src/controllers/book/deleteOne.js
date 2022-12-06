const { books: Book } = require("../../models");
const apiResponse = require("../../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({
      where: { id },
    });

    if (deleteBook) {
      return apiResponse.Ok(res, "Deleting data success");
    } else {
      return apiResponse.NotFound(res, "Id not found");
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
