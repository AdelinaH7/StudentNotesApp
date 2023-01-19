const express = require('express');
const router = express.Router();
const userController = require('../controller/').userController;

//Route and request type
//:id is a placeholder for the user id

router.post('/', userController.addUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;