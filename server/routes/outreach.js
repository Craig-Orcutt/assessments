'use strict';

const { Router } = require("express");
const router = Router();

const {getAllClients} = require('../controllers/outreachCtrl');

router.get("/server/outreach", getAllClients);

module.exports = router;