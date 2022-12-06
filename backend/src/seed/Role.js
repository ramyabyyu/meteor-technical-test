const db = require("../models");
const Role = db.roles;
const apiResponse = require("../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    await Role.create({
      id: 1,
      name: "user",
    });
    await Role.create({
      id: 2,
      name: "admin",
    });

    const allRoles = await Role.findAll();

    if (allRoles) {
      return apiResponse.Ok(res, allRoles);
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
