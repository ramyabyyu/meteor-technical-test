const { body, validationResult } = require('express-validator');
const apiResponse = require('../helpers/apiResponse');
const { users: User } = require('../models');
const comparePassword = require('../helpers/comparePassword');

const validate = {
  signIn: async (req, res, next) => {
    try {
      const oldUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!oldUser) {
        return apiResponse.BadRequest(res, "Email doesn't exist");
      }

      const checkPassword = await comparePassword(
        req.body.password,
        oldUser.password
      );

      if (!checkPassword) {
        return apiResponse.BadRequest(res, 'Password is incorrect');
      }

      req.oldUser = oldUser;

      next();
    } catch (error) {
      return apiResponse.InternalServerError(res, error);
    }
  },
  signUp: async (req, res, next) => {
    try {
      const oldUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      console.log(oldUser);

      if (oldUser) {
        return apiResponse.BadRequest(res, 'Email is already in use');
      }

      // body('email').isEmail();
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return apiResponse.BadRequest(res, 'Email is invalid');
      // }

      next();
    } catch (error) {
      return apiResponse.InternalServerError(res, error);
    }
  },
};

module.exports = validate;
