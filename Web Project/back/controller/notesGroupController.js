const NotesGroup = require("../models").NotesGroup;

const notesGroupController = {
  addFilter: async (req, res) => {
    const filter = {
      filterName: req.body.filterName,
      userId: req.body.userId,
    };

    let errors = [];

    if (filter.filterName.length < 3) {
      errors.push({
        msg:
          "Not a valid name for the filter. The name should have at least 3 characters",
      });
    }
    if (errors.length > 0) {
      res.send(errors);
    } else {
      try {
        const createdNotesGroup = await NotesGroup.create(filter).then(
          (data) => {
            res.status(201).send({ data, msg: "Added filter with success" });
          }
        );
      } catch (err) {
        res.status(400).send({
          msg: "Filter not added",
        });
      }
    }
  },

  getFilter: async (req, res) => {
    try {
      const filter = await NotesGroup.findByPk(req.params.id);
      res.status(200).send({
        filter,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Filter not found",
      });
    }
  },

  getAllFilters: async (req, res) => {
    let userId = 1; //change when front-end
    try {
      const notesGroup = await NotesGroup.findAll({
        where: {
          userId, //: req.user.id when front-end
        },
      });
      res.status(200).send({
        notesGroup,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Notes not found",
      });
    }
  },

  updateFilter: async (req, res) => {
    const filterToBeSent = {
      filterName: req.body.filterName,
    };

    let errors = [];

    if (filterToBeSent.filterName.length < 3) {
      errors.push({
        msg:
          "Not a valid name for the filter. The name should have at least 3 characters",
      });
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      try {
        filterDB = await NotesGroup.update(filterToBeSent, {
          where: {
            id: req.params.id,
          },
        });
        res.status(201).send({
          filterDB,
          msg: "Filter updated",
        });
      } catch (err) {
        res.send({
          msg: "Something went wrong while trying to update a filter",
        });
      }
    }
  },

  deleteFilter: async (req, res) => {
    try {
      const filter = await NotesGroup.findByPk(req.params.id);
      if (filter) {
        await filter.destroy();
        res.status(200).send({
          msg: "Filter deleted",
        });
      } else {
        res.status(404).send({
          msg: "Filter not found",
        });
      }
    } catch (err) {
      res.send({
        msg: "Something went wrong while trying to delete a filter",
      });
    }
  },
};

module.exports = notesGroupController;
