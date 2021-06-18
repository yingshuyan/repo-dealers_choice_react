const db = require("./db");
const { STRING } = require("sequelize").DataTypes;

const Book = db.define("book", {
  name: {
    type: STRING,
    allowNull: false,
  },
  bookUrl: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Book;
