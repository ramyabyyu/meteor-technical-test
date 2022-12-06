const db = require("../models");
const Category = db.categories;

module.exports = async () => {
  Category.create({
    id: 1,
    name: "Komputer",
  });

  Category.create({
    id: 2,
    name: "Bisnis",
  });

  Category.create({
    id: 3,
    name: "Kesehatan",
  });

  Category.create({
    id: 4,
    name: "Sejarah",
  });

  Category.create({
    id: 5,
    name: "Olahraga",
  });
};
