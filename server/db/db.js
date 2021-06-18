const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/dealers-choice-react");

module.exports = db;
