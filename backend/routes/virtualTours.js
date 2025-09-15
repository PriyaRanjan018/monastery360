const express = require('express');
const router = express.Router();
const Monastery = require('../models/Monastery');

// GET virtual tour data
router.get('/:monasteryId', async (req, res) => {
  try {
    const monastery = await Monastery
      .findById(req.params.monasteryId)
      .select('name virtualTour');
    
    if (!monastery || !monastery.virtualTour.isActive) {
      return res.status(404).json({ 
        success: false, 
        error: 'Virtual tour not available' 
      });
    }
    
    res.json({
      success: true,
      data: {
        monasteryName: monastery.name,
        tour: monastery.virtualTour
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// GET specific scene
router.get('/:monasteryId/scene/:sceneId', async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.monasteryId);
    const scene = monastery.virtualTour.scenes.find(
      s => s.id === req.params.sceneId
    );
    
    if (!scene) {
      return res.status(404).json({ 
        success: false, 
        error: 'Scene not found' 
      });
    }
    
    res.json({
      success: true,
      data: scene
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

module.exports = router;