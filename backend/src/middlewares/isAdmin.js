const db = require("../models");
const User = db.users;
const apiResponse = require("../helpers/apiResponse");

module.exports = async (req, res, next) => {
  try {
    const { user } = req;

    if (user.role !== "admin") {
      return apiResponse.Forbidden(
        res,
        "You are not allowed to do this action"
      );
    }

    next();
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
