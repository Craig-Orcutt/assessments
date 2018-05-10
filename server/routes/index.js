'use strict';

const { Router } = require("express");
const router = Router();

router.use(require("./auth-route"));
router.use(require("./form"));
router.use(require("./outreach"));
module.exports = router;