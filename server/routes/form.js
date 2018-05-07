'use strict';

const { Router } = require("express");
const router = Router();
const {getSubstances, addClientForm} = require('../controllers/formCtrl')

router.get("/server/form", getSubstances)
router.post("/submitform", addClientForm)
module.exports = router;