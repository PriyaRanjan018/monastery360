const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  monastery: { type: mongoose.Schema.Types.ObjectId, ref: 'Monastery' },
  type: String, // festival, ritual, ceremony, teaching
  dates: {
    start: Date,
    end: Date
  },
  recurrence: {
    isRecurring: Boolean,
    pattern: String // yearly, monthly, lunar
  },
  images: [String],
  participation: {
    isOpen: Boolean,
    capacity: Number,
    currentBookings: { type: Number, default: 0 },
    price: {
      indian: Number,
      foreign: Number
    },
    bookingDeadline: Date,
    requirements: [String]
  },
  languages: [String],
  contact: {
    email: String,
    phone: String
  },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Event', eventSchema);