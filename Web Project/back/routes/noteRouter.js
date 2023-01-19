const express = require('express');
const router = express.Router();
const noteController = require('../controller').noteController;

router.post('/', noteController.addNote);
router.get('/:id', noteController.getNote);
router.get('/', noteController.getAllUserNotes);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;