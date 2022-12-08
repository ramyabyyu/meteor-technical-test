const { users: User, roles: Role } = require('../../models');
const apiResponse = require('../../helpers/apiResponse');
const generateToken = require('../../helpers/generateToken');
const { SECRET_KEY } = process.env;

module.exports = async (req, res) => {
  try {
    const user = req.oldUser;

    const role = await Role.findOne({
      where: {
        id: user.role_id,
      },
    });

    // Generate token
    const encryptData = {
      id: user.id,
      role: role.name,
    };
    const token = generateToken(encryptData, SECRET_KEY, '1d');

    const resData = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: role.name,
      token,
    };

    return apiResponse.Ok(res, resData);
  } catch (error) {
    return apiResponse.BadRequest(res, error);
  }
};
