const { timeStamp } = require("console");
const Sequelize = require("sequelize");
const config = require("./config.json");

// Initialize the connection with a json object containing the db name, username, password, language and host user

const sequelize = new Sequelize(
  config.db.dbname,
  config.db.dbusername,
  config.db.dbpass,
  {
    dialect: config.db.dblang,
    host: config.db.dbhost,
    define: {
      timestamps: true, //automatically adds a createdAt and updatedAt field in our tables
    },
  }
);

module.exports = sequelize;
