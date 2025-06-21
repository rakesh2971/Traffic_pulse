const mongoose = require('mongoose');

const emergencyLogSchema = new mongoose.Schema({
  intersectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Intersection' },
  timestamp: { type: Date, default: Date.now },
  type: String, // e.g., 'AMBULANCE', 'FIRE_TRUCK'
  handled: { type: Boolean, default: false }
});

module.exports = mongoose.model('EmergencyLog', emergencyLogSchema);
