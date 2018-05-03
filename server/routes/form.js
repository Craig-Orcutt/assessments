'use strict';

const { Router } = require("express");
const router = Router();
const {getSubstances} = require('../controllers/formCtrl')

router.get("/form", getSubstances)
module.exports = router;