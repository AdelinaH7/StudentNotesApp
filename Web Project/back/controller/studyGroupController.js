const StudyGroup = require("../models").StudyGroup;
const studyGroupController = {
  addStudyGroup: async (req, res) => {
    const studyGroup = {
      name: req.body.gname,
      description: req.body.description,
      founderId: req.body.founderId,
    };

    let errors = [];

    //check unique

    if (studyGroup.name.length < 3) {
      errors.push({
        msg:
          "Not a valid name for the study group. The name should have at least 3 characters",
      });
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      try {
        const createdStudyGroup = await StudyGroup.create(studyGroup).then(
          (data) => {
            res.status(201).send({
              data,
              msg: "Created study group with success",
            });
          }
        );
      } catch (err) {
        res.status(400).send({
          msg: "Study group not created",
        });
      }
    }
  },

  getStudyGroup: async (req, res) => {
    try {
      const studyGroup = await StudyGroup.findByPk(req.params.id);
      res.status(200).send({
        studyGroup,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Study group not found",
      });
    }
  },

  getAllStudyGroups: async (req, res) => {
    let founderId = 1; //change when front-end
    try {
      const studyGroups = await StudyGroup.findAll({
        where: {
          founderId, //: req.user.id when front-end
        },
      });
      res.status(200).send({
        studyGroups,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Study groups not found",
      });
    }
  },

  updateStudyGroup: async (req, res) => {
    const studyGroupToBeSent = {
      name: req.body.name,
      description: req.body.description,
    };

    const uniqueCheck = await StudyGroup.findOne({
      where: {
        name: req.body.name,
      },
    });

    let errors = [];

    if (studyGroupToBeSent.name.length < 3) {
      errors.push({
        msg:
          "Not a valid name for the study group. The name should have at least 3 characters",
      });
    }

    if (uniqueCheck) {
      errors.push({
        msg:
          "Study group name is already taken, please choose another name for your study group",
      });
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      try {
        studyGroupDB = await StudyGroup.update(studyGroupToBeSent, {
          where: {
            id: req.params.id,
          },
        });
        res.status(201).send({
          studyGroupDB,
          msg: "Study group updated",
        });
      } catch (err) {
        res.send({
          msg: "Something went wrong while trying to update a study group",
        });
      }
    }
  },

  deleteStudyGroup: async (req, res) => {
    try {
      const studyGroup = await StudyGroup.findByPk(req.params.id);
      if (studyGroup) {
        await studyGroup.destroy();
        res.status(200).send({
          msg: "Study group deleted",
        });
      } else {
        res.status(404).send({
          msg: "Study group found",
        });
      }
    } catch (err) {
      res.send({
        msg: "Something went wrong while trying to delete a study group",
      });
    }
  },
};

module.exports = studyGroupController;
