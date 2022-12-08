const { users: User } = require('../../models');
const hashedPassword = require('../../helpers/hashPassword');
const apiResponse = require('../../helpers/apiResponse');

module.exports = async (req, res) => {
  try {
    const { body } = req;

    const newUser = await User.create({
      fullName: body.fullName,
      email: body.email,
      password: await hashedPassword(body.password),
      role_id: 1, // user
    });

    if (newUser) {
      return apiResponse.Ok(res, 'Register success!');
    }
  } catch (error) {
    return apiResponse.BadRequest(res, error);
  }
};
