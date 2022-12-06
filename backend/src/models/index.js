const Sequelize = require("sequelize");
const dbConfig = require("../config/db");

const sequelize = new Sequelize(
  dbConfig.NAME,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.users = require("./User")(sequelize, Sequelize);
db.books = require("./Book")(sequelize, Sequelize);
db.borrowings = require("./Borrowing")(sequelize, Sequelize);
db.categories = require("./Category")(sequelize, Sequelize);
db.roles = require("./Role")(sequelize, Sequelize);

// Relatioship

// One to many books and categories
db.categories.hasMany(db.books, { as: "books" });
db.books.belongsTo(db.categories, {
  foreignKey: "category_id",
  as: "category",
});

// One to many borrowings and users
db.users.hasMany(db.borrowings, { as: "borrowings" });
db.borrowings.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "user",
});

// One to many borrowings and books
db.books.hasMany(db.borrowings, { as: "borrowings" });
db.borrowings.belongsTo(db.books, {
  foreignKey: "book_id",
  as: "book",
});

// One to many users and roles
db.roles.hasMany(db.users, { as: "users" });
db.users.belongsTo(db.roles, {
  foreignKey: "role_id",
  as: "role",
});

module.exports = db;
