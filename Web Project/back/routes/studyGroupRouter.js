const express = require('express');
const router = express.Router();
const studyGroupController = require('../controller').studyGroupController;

router.post('/', studyGroupController.addStudyGroup);
router.get('/:id', studyGroupController.getStudyGroup);
router.get('/', studyGroupController.getAllStudyGroups);
router.put('/:id', studyGroupController.updateStudyGroup);
router.delete('/:id', studyGroupController.deleteStudyGroup);

module.exports = router;