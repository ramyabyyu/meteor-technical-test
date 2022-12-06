const bcrypt = require("bcryptjs");

module.exports = async (password) => {
  try {
    const saltRounds = 12;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
