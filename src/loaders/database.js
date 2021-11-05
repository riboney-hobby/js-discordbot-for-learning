// Src: https://www.bezkoder.com/node-js-express-sequelize-mysql/

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DBUSER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.vocab = require("../vocab.model.js")(sequelize, Sequelize);

module.exports = db;
