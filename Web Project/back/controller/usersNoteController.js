const UsersNote = require("../models").UsersNote;
const usersNoteController = {
  addUsersNote: async (req, res) => {
    const usersNote = {
      NoteId: req.body.NoteId,
      UserId: req.body.UserId,
    };
    try {
      const createdUsersNote = await UsersNote.create(usersNote);
      res.status(201).send({
        msg: "Created users note with success",
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getUsersNote: async (req, res) => {
    try {
      const usersNote = await UsersNote.findByPk(req.params.id);
      res.status(200).send({
        usersNote,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Users note not found",
      });
    }
  },

  getAllUsersNote: async (req, res) => {
    try {
      const usersNote = await UsersNote.findAll();
      res.status(200).send({
        usersNote,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Users note not found",
      });
    }
  },

  deleteUsersNote: async (req, res) => {
    try {
      const usersNote = await UsersNote.findByPk(req.params.id);
      if (usersNote) {
        await usersNote.destroy();
        res.status(200).send({
          msg: "Users note deleted",
        });
      } else {
        res.status(404).send({
          msg: "Users note found",
        });
      }
    } catch (err) {
      res.send({
        msg: "Something went wrong while trying to delete a users note",
      });
    }
  },
};

module.exports = usersNoteController;
