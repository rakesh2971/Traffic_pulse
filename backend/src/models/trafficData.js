const mongoose = require('mongoose');

const trafficDataSchema = new mongoose.Schema({
  intersectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Intersection' },
  timestamp: { type: Date, default: Date.now },
  vehicleCount: Number,
  signalStatus: String // e.g., 'GREEN', 'RED', etc.
});

module.exports = mongoose.model('TrafficData', trafficDataSchema);
