"use strict";

const { Router } = require("express");
const router = Router();

const { register, login, logout } = require("../controllers/authCtrl.js");

router.post("/server/register", register);
router.post("/server/login", login);
router.post("/server/logout", logout);


// For checking if user is logged in. Angular app can call this on page refresh, etc
router.get("/status", (req, res) => {
  console.log("user in status get", req.user);
  if (!req.isAuthenticated()) {
    console.log("not authed in get status route");
    return res.status(200).send(null);
  }
  res.status(200).json({ username: req.user.username, id: req.user.id, isOutreach: user.isOutreach  });
});

module.exports = router;
