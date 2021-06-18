const db = require("./db");

const Reader = require("./reader");
const Book = require("./book");
const Author = require("./author");

Book.belongsTo(Author);
Book.belongsTo(Reader);
Reader.belongsTo(Reader, { as: "follower" });

Author.hasMany(Book);
Reader.hasMany(Book);
Reader.hasMany(Reader, { as: "following", foreignKey: "followingId" });

module.exports = {
  db,
  Reader,
  Book,
  Author,
};
