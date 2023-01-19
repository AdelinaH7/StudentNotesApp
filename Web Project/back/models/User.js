const Sequelize = require("sequelize");
const db = require('../config/db');

//The db model for a user

const User = db.define(
    "User",
    {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        csie: Sequelize.STRING,
        yearCsie: Sequelize.INTEGER,
    },
    {
        tableName: "User",
    },
);

module.exports = User;