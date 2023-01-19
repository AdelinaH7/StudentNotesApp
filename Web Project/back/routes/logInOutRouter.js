const express = require('express');
const router = express.Router();
const logInOutController = require('../controller/logInOutController');
const passport = require('passport');

router.post('/register', logInOutController.register);
router.post('/login', logInOutController.login);

module.exports = router;