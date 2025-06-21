const mongoose = require('mongoose');

const intersectionSchema = new mongoose.Schema({
  name: String,
  location: {
    lat: Number,
    lng: Number
  },
  signals: [String] // e.g., ['N', 'S', 'E', 'W']
});

module.exports = mongoose.model('Intersection', intersectionSchema);
