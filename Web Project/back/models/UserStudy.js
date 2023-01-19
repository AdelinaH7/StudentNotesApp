const Sequelize = require("sequelize");
const db = require('../config/db');

//The db model for allocating a user to a study group

const UserStudy = db.define(
    "UserStudy",
    {
        UserId: Sequelize.INTEGER,
        StudyGroupId: Sequelize.INTEGER,
    },
    {
        tableName: "UserStudy",
    },
);

module.exports = UserStudy;