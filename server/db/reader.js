const db = require("./db");
const { STRING } = require("sequelize").DataTypes;
const Reader = db.define("reader", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Reader;
