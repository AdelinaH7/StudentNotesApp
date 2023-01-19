const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const router = require("./routes");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const db = require("./config/db");

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

require("./config/passport")(passport);

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
