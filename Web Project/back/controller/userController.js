const User = require("../models").User;
const bcrypt = require("bcryptjs");

//Controller containing CRUD operations for a user

const userController = {
  addUser: async (req, res) => {
    //This is a async function whch receiver 2 parameters request and response, and adds a user to the db
    const user = {
      //Initializing an user with the values received from the request body
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age,
      csie: req.body.csie,
      yearCsie: req.body.yearCsie,
    };
    try {
      //It tries to create a user, send it to the db and send a status code of 201
      //Uses the await operator to ensure that operation is done
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          let newPassword = hash;
          const userToBeSent = {
            username: req.body.username,
            password: newPassword,
            email: req.body.email,
            age: req.body.age,
            csie: req.body.csie,
            yearCsie: req.body.yearCsie,
          };
          User.create(userToBeSent)
            .then((userToBeSent) => {
              res.status(201).send({
                msg: "User created",
              });
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        });
      });
    } catch (err) {
      //If any error comes up durring the try catch block a status code of 400 will be sent along with a message
      res.status(400).send({
        msg: "User not added",
      });
    }
  },

  getUser: async (req, res) => {
    //Gets an user from the db
    try {
      //Searches for a user by its primary key, the id in this instance and sends a status code of 200 OK along with a message
      const user = await User.findByPk(req.params.id);
      res.status(200).send({
        user,
      });
    } catch (err) {
      //If any error comes up durring the try catch block a status code of 400 will be sent along with a message
      res.status(404).send({
        msg: "User not found",
      });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      //Gets all user entries in the db using the findAll function
      //Use await operator to ensure that the operation is waited for
      const users = await User.findAll();
      res.status(200).send({
        users,
      });
    } catch (err) {
      res.status(404).send({
        msg: "Users not found",
      });
    }
  },

  updateUser: async (req, res) => {
    //Updates a user, same way as in logInOutController

    let newPassword;

    const { username, password, email, age, csie, yearCsie } = req.body;
    let errors = [];

    const userCheck = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    const emailCheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!username || !email || !password || !age || !csie || !yearCsie) {
      errors.push({ msg: "Error, no field can be left empty" });
    }

    if (userCheck) {
      errors.push({ msg: "Username already exists, please try another name" });
    }

    if (emailCheck) {
      errors.push({ msg: "Email already used, please try another email" });
    }

    if (username.length < 5) {
      errors.push({ msg: "Username must have at least 5 characters" });
    }

    if (!email.endsWith("@stud.ase.ro")) {
      errors.push({ msg: "Invalid email format. Email must be a stud type" });
    }

    if (password.length < 8) {
      errors.push({ msg: "Password must have at least 8 characters" });
    }

    if (age <= 0 || age > 110) {
      errors.push({ msg: "Age must be between 0 and 110" });
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          newPassword = hash;

          const userToBeSent = {
            username: req.body.username,
            password: newPassword,
            email: req.body.email,
            age: req.body.age,
            csie: req.body.csie,
            yearCsie: req.body.yearCsie,
          };
          User.update(userToBeSent, {
            where: {
              id: req.params.id,
            },
          })
            .then((user) => {
              res.status(201).send({
                msg: "User updated",
              });
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        });
      });
    }
  },

  deleteUser: async (req, res) => {
    //This function deletes an user based on its id
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.destroy(); //deletes the found user
        res.status(200).send({
          //If the operation is succesful the user is deleted and we send a status code of 200
          msg: "User deleted",
        });
      } else {
        res.status(404).send({
          //Else we send a status code of 404 Not Found and a message
          msg: "User not found",
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = userController;
