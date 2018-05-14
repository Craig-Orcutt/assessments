
"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// auth stuff
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const routes = require("./server/routes");

app.set("models", require("./server/models"));
// gettting rid of CORS errors since I am running a proxy
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

app.use(express.static(__dirname + "/client"));


app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

require("./server/config/passport-strat.js");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, () => console.log(`Listening on port ${port}`));
