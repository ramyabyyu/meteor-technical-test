const db = require("../models");
const Category = db.categories;
const apiResponse = require("../helpers/apiResponse");

module.exports = async (req, res) => {
  try {
    await Category.create({
      id: 1,
      name: "Komputer",
    });

    await Category.create({
      id: 2,
      name: "Bisnis",
    });

    await Category.create({
      id: 3,
      name: "Kesehatan",
    });

    await Category.create({
      id: 4,
      name: "Sejarah",
    });

    await Category.create({
      id: 5,
      name: "Olahraga",
    });

    const allCategories = await Category.findAll();

    if (allCategories) {
      return apiResponse.Ok(res, allCategories);
    }
  } catch (error) {
    return apiResponse.InternalServerError(res, error);
  }
};
