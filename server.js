"use strict";

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// auth 
const session = require("express-session");
const passport = require("passport");

const bodyParser = require("body-parser");

const routes = require("./server/routes");

app.set("models", require("./server/models"));
app.use(express.static(__dirname + "/client"));
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello' });
// });

app.use(routes);
app.listen(port, () => console.log(`Listening on port ${port}`));