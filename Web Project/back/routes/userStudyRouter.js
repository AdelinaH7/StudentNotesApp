const express = require("express");
const router = express.Router();
const userStudyController = require("../controller").userStudyController;

router.post("/", userStudyController.addUserStudy);
router.get("/:id", userStudyController.getUserStudy);
router.get("/", userStudyController.getAllUserStudy);
router.delete("/:id", userStudyController.deleteUserStudy);

module.exports = router;
