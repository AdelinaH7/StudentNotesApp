const StudyNote = require("../models").StudyNote;
const studyNoteController = {
  addStudyNote: async (req, res) => {
    const studyNote = {
      NoteId: req.body.NoteId,
      StudyGroupId: req.body.StudyGroupId,
    };
    try {
      const createdStudyNote = await StudyNote.create(studyNote);
      res.status(201).send({
        msg: "Created study note with success",
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getStudyNote: async (req, res) => {
    try {
      const studyNote = await StudyNote.findByPk(req.params.id);
      res.status(200).send({
        studyNote,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Study note not found",
      });
    }
  },

  getAllStudyNote: async (req, res) => {
    try {
      const studyNote = await StudyNote.findAll();
      res.status(200).send({
        studyNote,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Study note not found",
      });
    }
  },

  deleteStudyNote: async (req, res) => {
    try {
      const studyNote = await StudyNote.findByPk(req.params.id);
      if (studyNote) {
        await studyNote.destroy();
        res.status(200).send({
          msg: "Study note deleted",
        });
      } else {
        res.status(404).send({
          msg: "Study note found",
        });
      }
    } catch (err) {
      res.send({
        msg: "Something went wrong while trying to delete a study note",
      });
    }
  },
};

module.exports = studyNoteController;
