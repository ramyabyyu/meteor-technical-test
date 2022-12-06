const jwt = require("jsonwebtoken");

module.exports = (data, secretKey, expiresIn) => {
  const token = jwt.sign(data, secretKey, { expiresIn });
  return token;
};
