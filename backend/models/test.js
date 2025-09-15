const mongoose = require('mongoose');

// Simple test schema
const testSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Test', testSchema);