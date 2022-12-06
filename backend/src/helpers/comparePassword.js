const bcrypt = require("bcryptjs");

module.exports = async (password, hashedPassword) => {
  try {
    const isCorrect = await bcrypt.compare(password, hashedPassword);
    return isCorrect;
  } catch (error) {
    console.log(error);
  }
};
