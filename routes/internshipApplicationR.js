// routes/internshipRoutes.js

const express = require('express');
const { submitInternshipApplication } = require("../controllers/internshipController");

const router = express.Router();

// POST: Submit internship application
router.post("/apply", submitInternshipApplication);

module.exports = router;
