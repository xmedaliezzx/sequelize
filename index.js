const express = require("express");
const {alterTables} = require('./models')
const { sequelize } = require("./models/sequelize");

const app = express();


alterTables()

app.listen(3000, () => {
  console.log("server is working");
});
