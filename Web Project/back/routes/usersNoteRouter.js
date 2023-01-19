const express = require("express");
const router = express.Router();
const usersNoteRouter = require("../controller").usersNoteController;

router.post("/", usersNoteRouter.addUsersNote);
router.get("/:id", usersNoteRouter.getUsersNote);
router.get("/", usersNoteRouter.getAllUsersNote);
router.delete("/:id", usersNoteRouter.deleteUsersNote);

module.exports = router;
