const db = require("../config/db");
const User = require("./User");
const Note = require("./Note");
const NotesGroup = require("./NotesGroup");
const NotesFilters = require("./NotesFilters");
const StudyGroup = require("./StudyGroup");
const UserStudy = require("./UserStudy");
const StudyNote = require("./StudyNote");
const UsersNote = require("./UsersNote");

// Relations between tables
// One to many or many to many relationships are listed below

User.hasMany(Note, { foreignKey: "authorId" });
User.hasMany(NotesGroup, { foreignKey: "userId" });
Note.belongsToMany(NotesGroup, { through: NotesFilters });
NotesGroup.belongsToMany(Note, { through: NotesFilters });
User.hasMany(StudyGroup, { foreignKey: "founderId" });
User.belongsToMany(StudyGroup, { through: UserStudy });
StudyGroup.belongsToMany(User, { through: UserStudy });
Note.belongsToMany(StudyGroup, { through: StudyNote });
StudyGroup.belongsToMany(Note, { through: StudyNote });
Note.belongsToMany(User, { through: UsersNote });
User.belongsToMany(Note, { through: UsersNote });

module.exports = {
  User,
  Note,
  NotesGroup,
  NotesFilters,
  StudyGroup,
  UserStudy,
  StudyNote,
  UsersNote,
  connection: db,
};
