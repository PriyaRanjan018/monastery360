const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    unique: true,
    default: () => 'BK' + Date.now() + Math.random().toString(36).substr(2, 9)
  },
  event: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event',
    required: true 
  },
  userDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    nationality: String,
    groupSize: { type: Number, default: 1 },
    ageGroup: String,
    participants: [{
      name: String,
      age: Number
    }]
  },
  bookingDate: { type: Date, default: Date.now },
  eventDate: Date,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending' 
  },
  payment: {
    amount: Number,
    currency: { type: String, default: 'INR' },
    method: String,
    transactionId: String,
    status: { 
      type: String, 
      enum: ['pending', 'paid', 'refunded'],
      default: 'pending' 
    }
  },
  specialRequests: String,
  confirmationSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);