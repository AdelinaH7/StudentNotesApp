const userController = require("./userController");
const resetController = require("./reset");
const noteController = require("./noteController");
const filterController = require("./notesGroupController");
const notesFiltersController = require("./notesFiltersController");
const studyGroupController = require("./studyGroupController");
const userStudyController = require("./userStudyController");
const logInOutController = require("./logInOutController");
const dbpopulateController = require("./dbpopulateController");
const studyNoteController = require("./studyNoteController");
const usersNoteController = require("./usersNoteController");

//Here is the main controller containing all the other controllers

const controller = {
  userController,
  noteController,
  filterController,
  notesFiltersController,
  studyGroupController,
  userStudyController,
  logInOutController,
  dbpopulateController,
  resetController,
  studyNoteController,
  usersNoteController,
};

module.exports = controller;
