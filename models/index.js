const { sequelize } = require("./sequelize");
const { User } = require("./user");
const { Post } = require("./post");


User.hasMany(Post)
Post.belongsTo(User)
const alterTables = () => {
  sequelize.sync({ alter: true });
};

module.exports = {
  User: User,
  Post: Post,
  alterTables: alterTables,
};
