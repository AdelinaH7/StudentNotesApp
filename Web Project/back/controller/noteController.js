const Note = require("../models").Note;
const noteController = {
  addNote: async (req, res) => {
    const note = {
      title: req.body.title,
      content: req.body.content,
      subject: req.body.subject,
      authorId: req.body.authorId,
    };
    let errors = [];

    if (note.title.length < 3) {
      errors.push({
        msg:
          "Not a valid title for the note. The title should have at least 3 characters",
      });
    }

    if (note.subject.length < 3) {
      errors.push({
        msg:
          "Not a valid subject for the note. The subject should have at least 3 characters",
      });
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      try {
        const createdNote = await Note.create(note).then((data) => {
          res.status(201).send({
            data,
            msg: "Added note with success",
          });
        });
      } catch (err) {
        res.status(400).send({
          msg: "Note not added",
        });
      }
    }
  },

  getNote: async (req, res) => {
    try {
      const note = await Note.findByPk(req.params.id);
      res.status(200).send({
        note,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Note not found",
      });
    }
  },

  getAllUserNotes: async (req, res) => {
    let authorId = 1;
    try {
      const notes = await Note.findAll({
        where: {
          authorId, //: req.user.id when front-end
        },
      });
      res.status(200).send({
        notes,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Notes not found",
      });
    }
  },

  updateNote: async (req, res) => {
    const noteToBeSent = {
      title: req.body.title,
      content: req.body.content,
      subject: req.body.subject,
    };

    let errors = [];

    if (noteToBeSent.title.length < 3) {
      errors.push({
        msg:
          "Not a valid title for the note. The title should have at least 3 characters",
      });
    }

    if (noteToBeSent.subject.length < 3) {
      errors.push({
        msg:
          "Not a valid subject for the note. The subject should have at least 3 characters",
      });
    }
    if (errors.length > 0) {
      res.send(errors);
    } else {
      try {
        noteDB = await Note.update(noteToBeSent, {
          where: {
            id: req.params.id,
          },
        });
        res.status(201).send({
          noteDB,
          msg: "Note updated",
        });
      } catch (err) {
        res.send({
          msg: "Something went wrong while trying to update a note",
        });
      }
    }
  },

  deleteNote: async (req, res) => {
    try {
      const note = await Note.findByPk(req.params.id);
      if (note) {
        await note.destroy();
        res.status(200).send({
          msg: "Note deleted",
        });
      } else {
        res.status(404).send({
          msg: "Note not found",
        });
      }
    } catch (err) {
      res.send({
        msg: "Something went wrong while trying to delete a note",
      });
    }
  },
};

module.exports = noteController;
