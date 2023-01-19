const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const resetRouter = require("./reset");
const noteRouter = require("./noteRouter");
const filterRouter = require("./notesGroupRouter");
const notesFilterRouter = require("./notesFiltersRouter");
const studyGroupRouter = require("./studyGroupRouter");
const userStudyRouter = require("./userStudyRouter");
const logInOutRouter = require("./logInOutRouter");
const dbpopulateRouter = require("./dbpopulateRouter");
const studyNoteRouter = require("./studyNoteRouter");
const usersNoteRouter = require("./usersNoteRouter");

//Main router specifing the routes

router.use("/user", userRouter);
router.use("/reset", resetRouter);
router.use("/note", noteRouter);
router.use("/filter", filterRouter);
router.use("/notefilter", notesFilterRouter);
router.use("/group", studyGroupRouter);
router.use("/userstudy", userStudyRouter);
router.use("/welcome", logInOutRouter);
router.use("/populate", dbpopulateRouter);
router.use("/studynote", studyNoteRouter);
router.use("/share", usersNoteRouter);

module.exports = router;
