require("dotenv").config();
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  "ejemploClaseDB",
  "root",
  "root",
  {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: false,
  }
);
User.initModel(sequelize);
module.exports = { sequelize, User };
