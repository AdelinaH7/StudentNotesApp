const Sequelize = require("sequelize");
const db = require('../config/db');

////The db model for allocating a filter to a note

const NotesFilters = db.define(
    "NotesFilters",
    {
        NoteId: Sequelize.INTEGER,
        NotesGroupId: Sequelize.INTEGER,
    },
    {
        tableName: "NotesFilters",
    },
);

module.exports = NotesFilters;