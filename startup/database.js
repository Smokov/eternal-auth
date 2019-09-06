const settings = require("../config/settings");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "eternal-auth",
  settings.DB_USER,
  settings.DB_PASS,
  {
    dialect: "postgres",
    host: settings.DB_URL
  }
);

module.exports = sequelize;
