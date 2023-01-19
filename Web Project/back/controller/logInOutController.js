// const express = require('express'); For logout
// const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user");
const { forwardAuthenticated } = require("../config/auth");

//Controller for creating a user (through a form when front-end) and logging in

const controller = {
  register: async (req, res) => {
    //This is an async function receiving request and response as parameters and registers an user
    const {
      username,
      password,
      password2,
      email,
      age,
      csie,
      yearCsie,
    } = req.body;

    const userCheck = await User.findOne({
      //Search for a user with the same username as the one in the request body
      where: {
        username: req.body.username,
      },
    });

    const emailCheck = await User.findOne({
      //Search for a user with the same email as the one in the request body
      where: {
        email: req.body.email,
      },
    });

    let errors = [];

    if (
      !username ||
      !email ||
      !password ||
      !password2 ||
      !age ||
      !csie ||
      !yearCsie
    ) {
      //If any one is empty an error will be sent to the errors array
      errors.push({ msg: "Please complete all fields" });
    }

    if (userCheck) {
      //If it exists that means it is not unique so and error will be sent
      errors.push({ msg: "Username already exists, please try another name" });
    }

    if (emailCheck) {
      //If it exists that means it is not unique so and error will be sent
      errors.push({ msg: "Email already used, please try another email" });
    }

    if (username.length < 5) {
      //If the username is shorter than 5 characters an error will be sent
      errors.push({ msg: "Username must have at least 5 characters" });
    }

    if (!email.endsWith("@stud.ase.ro")) {
      //If the email doesn't end with the specified string an error will be sent
      errors.push({ msg: "Invalid email format. Email must be a stud type" });
    }

    if (password != password2) {
      //If the password don't match an error will be sent
      errors.push({ msg: "Passwords are different" });
    }

    if (password.length < 8) {
      //If the password is shorter than 8 characters an error will be sent
      errors.push({ msg: "Password must have at least 8 characters" });
    }

    if (age <= 0 || age > 110) {
      //If the age isn't between the specified values an error will be sent
      errors.push({ msg: "Age must be between 0 and 110" });
    }

    if (errors.length > 0) {
      //If any error was sent to the vector it will be shown and sent as a response
      res.send(errors);
    } else {
      //If no errors exist we will proceed with this
      User.findOne({ where: { email: email } }).then((user) => {
        //Searches for a user by email (since emails should be unique)
        if (user) {
          //If one user is found an error
          errors.push({ msg: "E-mail already used" });
          res.send({ msg: "User already exists" });
        } else {
          //If no user is found it creates a new one containing the received values based on the user model
          const newUser = new User({
            username,
            password,
            email,
            age,
            csie,
            yearCsie,
          });

          bcrypt.genSalt(10, (err, salt) => {
            //This is a function which encrypts the password
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              //Hashes the password, which is received as the first parameter
              if (err) throw err;
              newUser.password = hash;
              newUser //If no error exists the user will have his password encrypted and it will be sent to the db with a message
                .save()
                .then((user) => {
                  res.send({ msg: "A new user was created" });
                }) //If any errors show up they will be shown
                .catch((err) => console.log(err));
            });
          });
        }
      });
    }
  },
  login: async (req, res) => {
    try {
      console.log(req.body);
      let user = await User.findOne({ where: { email: req.body.email } });
      let passValid = await bcrypt.compare(req.body.password, user.password);

      if (passValid) {
        res.send({ ok: true, id: user.id });
      } else {
        res.send({ ok: false, message: "Email or password does not match" });
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = controller;
