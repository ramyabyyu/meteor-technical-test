const { users: User, roles: Role } = require("../../models");
const comparePassword = require("../../helpers/comparePassword");
const apiResponse = require("../../helpers/apiResponse");
const generateToken = require("../../helpers/generateToken");
const { SECRET_KEY } = process.env;

module.exports = async (req, res) => {
  try {
    const { body } = req;

    const oldUser = await User.findOne({
      where: {
        email: body.email,
      },
    });

    // check email
    if (!oldUser) {
      return apiResponse.BadRequest(res, "Email doesn't exist");
    }

    // check password
    const isPasswordCorrect = await comparePassword(
      body.password,
      oldUser.password
    );

    if (!isPasswordCorrect) {
      return apiResponse.BadRequest(res, "Passowrd is incorrect");
    }

    const role = await Role.findOne({
      where: {
        id: oldUser.role_id,
      },
    });

    // Generate token
    const encryptData = {
      id: oldUser.id,
      email: oldUser.email,
      role: role.name,
    };
    const token = generateToken(encryptData, SECRET_KEY, "1d");

    const resData = {
      id: oldUser.id,
      fullName: oldUser.fullName,
      email: oldUser.email,
      role: role.name,
      token,
    };

    return apiResponse.Ok(res, resData);
  } catch (error) {
    return apiResponse.BadRequest(res, error);
  }
};
