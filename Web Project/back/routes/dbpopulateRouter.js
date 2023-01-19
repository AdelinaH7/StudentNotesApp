const express = require('express');
const router = express.Router();
const dbpopulateController = require('../controller').dbpopulateController

router.get('/', dbpopulateController.addData);

module.exports = router;