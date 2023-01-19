const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const User = require("../models").User;

// Verify if the user exists by searching for the email and then if the passwords match

module.exports = function (passport) {
  //This function receives passport as a parameter
  passport.use(
    new LocalStrategy({ emailField: "email" }, (email, password, done) => {
      User.findOne({
        //This searches for a user with the same email as the one inputed in the db
        where: { email: email },
      }).then((user) => {
        //After searching
        if (!user) {
          //If it doesn't find a user it returns a function, with 2 parameters and a message
          console.log("Email does not exist");
          return done(null, false, { message: "Email does not exist" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          //This is a function which receives a few parameters which compares a password with the encrypted password in the db
          if (err) throw err; //If it has an error it is shown
          if (isMatch) {
            //If the passwords match the user will receive a message and it will return a function containing the checked user
            console.log("User is now logged in");
            return done(null, user);
          } else {
            //If the passwords don't match it returns a function containing a message
            console.log("Invalid password");
            return done(null, false, { message: "Invalid password" });
          }
        });
      });
    })
  );

  passport.serializeUser(function (user, done) {
    //This function serializes a user
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    //This function deserializes a user by searching for the user id (primary key)
    User.findByPk(id, function (err, user) {
      done(err, user);
    });
  });
};
