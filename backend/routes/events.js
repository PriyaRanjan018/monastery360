const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET all events
router.get('/', async (req, res) => {
  try {
    const { monastery, month, year, type } = req.query;
    let query = { isActive: true };
    
    if (monastery) query.monastery = monastery;
    if (type) query.type = type;
    
    if (month && year) {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
      query['dates.start'] = { $gte: startDate, $lte: endDate };
    }
    
    const events = await Event.find(query)
      .populate('monastery', 'name location')
      .sort({ 'dates.start': 1 });
    
    res.json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET upcoming events
router.get('/upcoming', async (req, res) => {
  try {
    const events = await Event.find({
      isActive: true,
      'dates.start': { $gte: new Date() }
    })
    .populate('monastery', 'name location')
    .sort({ 'dates.start': 1 })
    .limit(10);
    
    res.json({
      success: true,
      data: events
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET single event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('monastery', 'name location');
    
    if (!event) {
      return res.status(404).json({ 
        success: false, 
        error: 'Event not found' 
      });
    }
    
    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// POST create event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    
    res.status(201).json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
});

module.exports = router;