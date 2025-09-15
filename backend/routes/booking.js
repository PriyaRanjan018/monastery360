const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Event = require('../models/Event');

// POST create booking
router.post('/', async (req, res) => {
  try {
    const { eventId, userDetails, eventDate, specialRequests } = req.body;
    
    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ 
        success: false, 
        error: 'Event not found' 
      });
    }
    
    // Check capacity
    if (event.participation && event.participation.capacity) {
      if (event.participation.currentBookings >= event.participation.capacity) {
        return res.status(400).json({ 
          success: false, 
          error: 'Event is fully booked' 
        });
      }
    }
    
    // Create booking
    const booking = new Booking({
      event: eventId,
      userDetails,
      eventDate: eventDate || event.dates.start,
      specialRequests,
      payment: {
        amount: event.participation?.price?.indian * (userDetails.groupSize || 1),
        currency: 'INR'
      }
    });
    
    await booking.save();
    
    // Update event booking count
    if (event.participation) {
      event.participation.currentBookings = 
        (event.participation.currentBookings || 0) + (userDetails.groupSize || 1);
      await event.save();
    }
    
    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate({
        path: 'event',
        populate: { 
          path: 'monastery', 
          select: 'name location' 
        }
      });
    
    if (!booking) {
      return res.status(404).json({ 
        success: false, 
        error: 'Booking not found' 
      });
    }
    
    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET all bookings (for admin)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('event')
      .sort({ bookingDate: -1 });
    
    res.json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// PUT cancel booking
router.put('/:id/cancel', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ 
        success: false, 
        error: 'Booking not found' 
      });
    }
    
    booking.status = 'cancelled';
    await booking.save();
    
    // Update event booking count
    const event = await Event.findById(booking.event);
    if (event && event.participation) {
      event.participation.currentBookings = 
        Math.max(0, (event.participation.currentBookings || 0) - (booking.userDetails.groupSize || 1));
      await event.save();
    }
    
    res.json({
      success: true,
      data: booking,
      message: 'Booking cancelled successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

module.exports = router;