'use strict';

const { Router } = require("express");
const router = Router();

router.use(require("./form"));
module.exports = router;