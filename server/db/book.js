const db = require("./db");
const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;

const Book = db.define("book", {
  name: {
    type: STRING,
    allowNull: false,
  },
  bookUrl: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT("long"),
  },
});

module.exports = Book;
