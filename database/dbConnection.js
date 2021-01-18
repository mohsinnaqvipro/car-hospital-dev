const Sequelize = require("sequelize");
const config = require("../config/config.json");
const connection = {};

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    dialect: config.development.dialect,
    host: config.development.host,
    port: 3306,
    retry: {
      match: [/ETIMEDOUT/],
      max: 2,
    },
    dialectOptions: {
      connectTimeout: 150000,
    },
  }
);
module.exports = async () => {
  if (connection.isConnected) {
    console.log("=> Existing connection.");
    return { sequelize, Sequelize };
  }
  // console.log(process.env);
  // await sequelize.sync();
  await sequelize.authenticate();
  const Op = Sequelize.Op;
  connection.isConnected = true;
  console.log("=> Created a new connection.");
  return { sequelize, Sequelize, Op };
};
