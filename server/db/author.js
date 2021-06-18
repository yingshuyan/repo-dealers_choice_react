const db = require("./db");
const { STRING } = require("sequelize").DataTypes;

const Author = db.define("author", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Author;
