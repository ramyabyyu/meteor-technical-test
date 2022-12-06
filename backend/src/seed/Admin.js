const db = require("../models");
const User = db.users;
const hashPassword = require("../helpers/hashPassword");
const apiResponse = require("../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    const password = "admin1234";

    const admin = await User.create({
      fullName: `Admin Meteor`,
      email: "admin@meteor.com",
      password: await hashPassword(password),
      role_id: 2, // admin
    });

    if (admin) {
      return apiResponse.Ok(res, admin);
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
