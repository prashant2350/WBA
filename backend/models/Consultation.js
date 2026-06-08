const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  serviceInterest: { type: String, required: true },
  message: { type: String },
  requestDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Consultation', consultationSchema);