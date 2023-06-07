const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqq", "root", "Duetodata@123", {
  host: "localhost",
  username: "root",
  password: "Duetodata@123",
  database: "sqq",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) { 
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = {
  sequelize: sequelize,
};

