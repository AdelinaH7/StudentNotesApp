const express = require("express");
const router = express.Router();
const studyNoteController = require("../controller").studyNoteController;

router.post("/", studyNoteController.addStudyNote);
router.get("/:id", studyNoteController.getStudyNote);
router.get("/", studyNoteController.getAllStudyNote);
router.delete("/:id", studyNoteController.deleteStudyNote);

module.exports = router;
