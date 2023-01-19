const connection = require("../models").connection;

//Controller for resetting the db

const controller = {
    reset: (req, res) => { //Opens a new connection, this way "resseting" the db
        connection
            .sync({ force: true })
            .then(() => {//Sends a status code of 201 if it succesful 
                res.status(201).send({
                    message: "Database reset",
                });
            })
            .catch(() => { //If any error comes up a status code of 500 Internal Server Error is sent along with a message
                res.status(500).send({
                    message: "Reset DB error",
                });
            });
    },
};

module.exports = controller;