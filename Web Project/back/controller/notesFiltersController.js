const NotesFilters = require("../models").NotesFilters;

const notesFiltersController = {
  addNotesFilter: async (req, res) => {
    const notesFilters = {
      NoteId: req.body.NoteId,
      NotesGroupId: req.body.NotesGroupId,
    };
    try {
      const creatednotesFilters = await NotesFilters.create(notesFilters);
      res.status(201).send({
        msg: "Added notesFilters with success",
      });
    } catch (err) {
      res.status(400).send({
        msg: "notesFilters not added",
        err,
      });
    }
  },

  getNotesFilter: async (req, res) => {
    try {
      const notesFilter = await NotesFilters.findByPk(req.params.id);
      res.status(200).send({
        notesFilter,
      });
    } catch (err) {
      res.status(404).send({
        msg: "notesFilter not found",
      });
    }
  },

  getAllNotesFilter: async (req, res) => {
    try {
      const notesFilters = await NotesFilters.findAll();
      res.status(200).send({
        notesFilters,
      });
    } catch (err) {
      res.status(404).send({
        msg: "notesFilter not found",
      });
    }
  },

  deleteFilter: async (req, res) => {
    try {
      const notesFilter = await NotesFilters.findByPk(req.params.id);
      if (notesFilter) {
        await notesFilter.destroy();
        res.status(200).send({
          msg: "notesFilter deleted",
        });
      } else {
        res.status(404).send({
          msg: "notesFilter not found",
        });
      }
    } catch (err) {
      res.send({
        msg: "Something went wrong while trying to delete a notesFilter",
      });
    }
  },
};

module.exports = notesFiltersController;
