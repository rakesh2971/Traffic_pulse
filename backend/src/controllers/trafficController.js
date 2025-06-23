const TrafficData = require('../models/trafficData');
const Intersection = require('../models/intersection');
const EmergencyLog = require('../models/emergencyLog');

module.exports = {
  // Traffic endpoints
  getTrafficData: async (req, res) => {
    try {
      const data = await TrafficData.find().populate('intersectionId');
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch traffic data' });
    }
  },
  postTrafficData: async (req, res) => {
    try {
      const { intersectionId, vehicleCount, signalStatus } = req.body;
      const newTraffic = new TrafficData({ intersectionId, vehicleCount, signalStatus });
      await newTraffic.save();
      // Emit real-time update
      req.app.get('io').emit('trafficUpdate', newTraffic);
      res.status(201).json(newTraffic);
    } catch (err) {
      res.status(400).json({ error: 'Failed to add traffic data' });
    }
  },
  // Signal endpoints
  getSignalData: async (req, res) => {
    try {
      // Return all intersections and their signals
      const intersections = await Intersection.find();
      res.json(intersections);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch signal data' });
    }
  },
  postSignalData: async (req, res) => {
    try {
      const { intersectionId, signals } = req.body;
      const updated = await Intersection.findByIdAndUpdate(
        intersectionId,
        { signals },
        { new: true }
      );
      if (!updated) return res.status(404).json({ error: 'Intersection not found' });
      // Emit real-time update
      req.app.get('io').emit('signalUpdate', updated);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update signal data' });
    }
  },
  // Emergency endpoints
  getEmergencyLogs: async (req, res) => {
    try {
      const logs = await EmergencyLog.find().populate('intersectionId');
      res.json(logs);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch emergency logs' });
    }
  },
  postEmergencyLog: async (req, res) => {
    try {
      const { intersectionId, type } = req.body;
      const newLog = new EmergencyLog({ intersectionId, type });
      await newLog.save();
      // Emit real-time update
      req.app.get('io').emit('emergencyUpdate', newLog);
      res.status(201).json(newLog);
    } catch (err) {
      res.status(400).json({ error: 'Failed to add emergency log' });
    }
  }
};
