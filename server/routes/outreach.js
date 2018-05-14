'use strict';

const { Router } = require("express");
const router = Router();

const {getAllClients, sortBySeverity, sortByGender, sortByInquiryDate} = require('../controllers/outreachCtrl');

router.get("/server/outreach", getAllClients);
router.get('/server/sortBySeverity', sortBySeverity)
router.get('/server/sortByGender', sortByGender)
router.get('/server/sortByInquiryDate', sortByInquiryDate)

module.exports = router;