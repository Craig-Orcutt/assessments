'use strict';

const { Router } = require("express");
const router = Router();

const {getAllClients, sortBySeverity, sortByGender, sortByInquiryDate, sortByTherapist} = require('../controllers/outreachCtrl');

router.get("/server/outreach", getAllClients);
router.get('/server/sortBySeverity', sortBySeverity)
router.get('/server/sortByGender', sortByGender)
router.get('/server/sortByInquiryDate', sortByInquiryDate)
router.get('/server/sortByTherapist', sortByTherapist)

module.exports = router;