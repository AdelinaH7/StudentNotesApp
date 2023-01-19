const express = require("express");
const router = express.Router();
const notesFiltersController = require("../controller").notesFiltersController;

router.post("/", notesFiltersController.addNotesFilter);
router.get("/:id", notesFiltersController.getNotesFilter);
router.get("/", notesFiltersController.getAllNotesFilter);
router.delete("/:id", notesFiltersController.deleteFilter);

module.exports = router;
