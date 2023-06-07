const { sequelize } = require("./sequelize");
const { DataTypes } = require("sequelize");

exports.Post = sequelize.define(
  "Post",
  {
    POST: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);
