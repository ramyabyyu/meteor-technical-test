const db = require("../models");
const User = db.users;
const hashPassword = require("../helpers/hashPassword");

module.exports = async () => {
  const password = "admin1234";
  User.create({
    fullName: "Admin Meteor",
    email: "admin@meteor.com",
    password: await hashPassword(password),
    role_id: 2, // admin
  });
};
