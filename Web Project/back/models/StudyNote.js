const Sequelize = require("sequelize");
const db = require("../config/db");

////The db model for allocating a note to a study group

const StudyNote = db.define(
  "StudyNote",
  {
    NoteId: Sequelize.INTEGER,
    StudyGroupId: Sequelize.INTEGER,
  },
  {
    tableName: "StudyNote",
  }
);

module.exports = StudyNote;
