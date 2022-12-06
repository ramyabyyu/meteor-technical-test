const db = require("../models");
const User = db.users;
const apiResponse = require("../helpers/apiResponse");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!body.email.match(regex)) {
      return apiResponse.BadRequest(res, "Email is invalid");
    }

    const user = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (user) {
      return apiResponse.BadRequest(res, "Email is already in use!");
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};
