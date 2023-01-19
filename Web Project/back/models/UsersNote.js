const Sequelize = require("sequelize");
const db = require("../config/db");

////The db model for allocating a note to another user

const UsersNote = db.define(
  "UsersNote",
  {
    NoteId: Sequelize.INTEGER,
    UserId: Sequelize.INTEGER,
  },
  {
    tableName: "UsersNote",
  }
);

module.exports = UsersNote;
