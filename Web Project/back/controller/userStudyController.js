const UserStudy = require("../models").UserStudy;
const userStudyController = {
  addUserStudy: async (req, res) => {
    const userStudy = {
      UserId: req.body.UserId,
      StudyGroupId: req.body.StudyGroupId,
    };
    try {
      const createdStudyGroup = await UserStudy.create(userStudy);
      res.status(201).send({
        msg: "Created user study with success",
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getUserStudy: async (req, res) => {
    try {
      const userStudy = await UserStudy.findByPk(req.params.id);
      res.status(200).send({
        userStudy,
      });
    } catch (err) {
      res.status(404).send({
        msg: "User study not found",
      });
    }
  },

  getAllUserStudy: async (req, res) => {
    try {
      const userStudy = await UserStudy.findAll();
      res.status(200).send({
        userStudy,
      });
    } catch (err) {
      res.status(404).send({
        msg: "User study not found",
      });
    }
  },

  deleteUserStudy: async (req, res) => {
    try {
      const userStudy = await UserStudy.findByPk(req.params.id);
      if (userStudy) {
        await userStudy.destroy();
        res.status(200).send({
          msg: "User study deleted",
        });
      } else {
        res.status(404).send({
          msg: "User study found",
        });
      }
    } catch (err) {
      res.send({
        msg: "Something went wrong while trying to delete a user study",
      });
    }
  },
};

module.exports = userStudyController;
