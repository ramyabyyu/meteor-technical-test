const Admin = require("./Admin");
const Category = require("./Category");
const Role = require("./Role");

// function to execute all seeders
module.exports = () => {
  Role();
  Admin();
  Category();
};
