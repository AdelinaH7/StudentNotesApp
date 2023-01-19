const express = require("express");
const router = express.Router();
const filterController = require("../controller").filterController;

router.post("/", filterController.addFilter);
router.get("/:id", filterController.getFilter);
router.get("/", filterController.getAllFilters);
router.put("/:id", filterController.updateFilter);
router.delete("/:id", filterController.deleteFilter);

module.exports = router;
