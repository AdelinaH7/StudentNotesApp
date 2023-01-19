const Sequelize = require("sequelize");
const db = require('../config/db');

//The db model for a single note

const Note = db.define(
    "Note",
    {
        title: Sequelize.STRING,
        content: Sequelize.STRING,
        subject: Sequelize.STRING,
    },
    {
        tableName: "Note",
    },
);

module.exports = Note;