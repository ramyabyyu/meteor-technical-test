const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
const db = require("../models");
const User = db.users;
const apiResponse = require("../helpers/apiResponse");

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization
      ? req.headers.authorization.replace("Bearer ", "")
      : null;
    if (token) {
      const decoded = await jwt.verify(token, SECRET_KEY);
      req.user = { ...decoded, token };

      next();
    } else {
      apiResponse.Unauthorized(res, "No token in the headers.");
      return;
    }
  } catch (error) {
    apiResponse.BadRequest(res, "Token is invalid");
    return;
  }
};
