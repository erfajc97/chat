const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "chat",
  port: 5432,
  host: "localhost",
  username: "erfajc",
  password: "root",
  dialect: "postgres",
  logging: false,
});

module.exports = db;