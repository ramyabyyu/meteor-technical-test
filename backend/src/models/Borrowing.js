module.exports = (sequelize, Sequelize) => {
  const Borrowing = sequelize.define("borrowings", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "pending",
    },
    isBorrowed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    dueDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });

  return Borrowing;
};
