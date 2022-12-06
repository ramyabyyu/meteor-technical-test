const db = require("../models");
const Role = db.roles;

module.exports = () => {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "admin",
  });
};
