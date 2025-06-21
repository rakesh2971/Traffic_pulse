const express = require('express');
const router = express.Router();

// Import controllers (to be created)
// const trafficController = require('../controllers/trafficController');

// Example placeholder routes
router.get('/', (req, res) => {
  res.send('API is working');
});

// Add more routes here for /traffic, /signal, /emergency

module.exports = router;
