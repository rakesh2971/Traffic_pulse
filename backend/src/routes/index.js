const express = require('express');
const router = express.Router();

const trafficController = require('../controllers/trafficController');

// Root endpoint
router.get('/', (req, res) => {
  res.send('API is working');
});

// Traffic endpoints
router.get('/traffic', trafficController.getTrafficData);
router.post('/traffic', trafficController.postTrafficData);

// Signal endpoints
router.get('/signal', trafficController.getSignalData);
router.post('/signal', trafficController.postSignalData);

// Emergency endpoints
router.get('/emergency', trafficController.getEmergencyLogs);
router.post('/emergency', trafficController.postEmergencyLog);

module.exports = router;
