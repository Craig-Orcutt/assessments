'use strict';

const { Router } = require("express");
const router = Router();
const {getSubstances, addClientSubstance} = require('../controllers/formCtrl')

router.get("/server/form", getSubstances)
router.post("/server/submitform", addClientSubstance)
module.exports = router;