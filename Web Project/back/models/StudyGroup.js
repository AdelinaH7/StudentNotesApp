const Sequelize = require("sequelize");
const db = require('../config/db');

//The db model for a study group

const StudyGroup = db.define(
    "StudyGroup",
    {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
    },
    {
        tableName: "StudyGroup",
    },
);

module.exports = StudyGroup;