const express = require('express');
const router = express.Router();
const Monastery = require('../models/Monastery');

// GET all monasteries
router.get('/', async (req, res) => {
  try {
    const monasteries = await Monastery.find();
    console.log(`Found ${monasteries.length} monasteries`);
    res.json({
      success: true,
      count: monasteries.length,
      data: monasteries
    });
  } catch (error) {
    console.error('Error fetching monasteries:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET single monastery
router.get('/:id', async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id);
    if (!monastery) {
      return res.status(404).json({
        success: false,
        error: 'Monastery not found'
      });
    }
    res.json({
      success: true,
      data: monastery
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST create monastery
router.post('/', async (req, res) => {
  try {
    const monastery = new Monastery(req.body);
    await monastery.save();
    res.status(201).json({
      success: true,
      data: monastery
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;

// POST - Add new monastery (add this to existing file)
router.post('/', async (req, res) => {
  try {
    const monastery = new Monastery(req.body);
    await monastery.save();
    res.status(201).json({
      success: true,
      message: 'Monastery added successfully',
      data: monastery
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// PUT - Update monastery
router.put('/:id', async (req, res) => {
  try {
    const monastery = await Monastery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({
      success: true,
      message: 'Monastery updated successfully',
      data: monastery
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE - Remove monastery
router.delete('/:id', async (req, res) => {
  try {
    await Monastery.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: 'Monastery deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});