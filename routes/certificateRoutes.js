const express = require('express');
const router = express.Router();
const certificateControllers = require('../controllers/certificateControllers');

// Route for retrieving a single certificate by ID
router.get('/get/:_id', async (req, res) => {
  try {
    res.status(200).json(`Root API called... ID => ${req.params._id}`);
  } catch (error) {
    res.status(500).json({ error: 'Root API error !!!' });
  }
});

// Route for creating a new certificate request
router.post('/request', certificateControllers.createCertificateRequest);

// Route for retrieving all certificate requests with status 'pending'
router.get('/requests', certificateControllers.getAllRequests);

// Route for approving and generating the certificate (updating the status)
router.put('/create/:_id', certificateControllers.generateCertificate);

// Route for retrieving all certificates with status 'approved'
router.get('/all', certificateControllers.getAllCertificates);

// Route for rejecting (deleting) a certificate request
router.delete('/reject/:_id', certificateControllers.rejectCertificateRequest);

// Route for sending the certificate email (this could also be done in generateCertificate)
router.post('/send-email/:_id', certificateControllers.sendCertificateEmail);

module.exports = router;
