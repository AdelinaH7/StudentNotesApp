const Sequelize = require("sequelize");
const db = require("../config/db");

//The db model for a filter

const NotesGroup = db.define(
  "NotesGroup",
  {
    filterName: Sequelize.STRING,
  },
  {
    tableName: "NotesGroup",
  }
);

module.exports = NotesGroup;
