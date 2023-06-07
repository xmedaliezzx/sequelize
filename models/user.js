const { sequelize } = require("./sequelize");
const { DataTypes } = require("sequelize");

exports.User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  }
);
