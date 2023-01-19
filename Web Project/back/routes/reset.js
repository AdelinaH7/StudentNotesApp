const express = require("express");
const router = express.Router();
const otherController = require("../controller").resetController;

//Route and request type

router.get("/", otherController.reset);

module.exports = router;