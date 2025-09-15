const mongoose = require('mongoose');

const monasterySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  
  // Location with transport integration
  location: {
    coordinates: [Number], // [longitude, latitude]
    address: String,
    district: String,
    altitude: Number,
    googleMapsUrl: String,
    nearbyAttractions: [{
      name: String,
      type: String,
      distance: Number,
      description: String
    }],
    transportOptions: [{
      type: { type: String }, // bus, taxi, helicopter
      provider: String,
      contact: String,
      price: Number,
      duration: String,
      bookingUrl: String
    }]
  },
  
  // 360° Virtual Tour
  virtualTour: {
    isActive: { type: Boolean, default: false },
    scenes: [{
      id: String,
      name: String,
      panoramaUrl: String,
      thumbnailUrl: String,
      hotspots: [{
        id: String,
        position: { yaw: Number, pitch: Number },
        type: String, // info, navigation, audio
        title: String,
        content: String,
        targetSceneId: String,
        audioUrl: String
      }],
      narration: [{
        language: String,
        audioUrl: String,
        transcript: String
      }]
    }],
    defaultSceneId: String
  },
  
  // Digital Archives
  digitalArchives: [{
    id: String,
    title: String,
    type: String, // manuscript, mural, document, artifact
    description: String,
    imageUrl: String,
    highResUrl: String,
    thumbnailUrl: String,
    period: String,
    language: String,
    tags: [String],
    aiAnalysis: {
      extractedText: String,
      categories: [String],
      significance: String,
      relatedItems: [String]
    },
    downloadable: Boolean
  }],
  
  // Smart Audio Guides
  audioGuides: [{
    id: String,
    language: String,
    languageCode: String,
    narrator: String,
    sections: [{
      id: String,
      title: String,
      audioUrl: String,
      duration: Number,
      transcript: String,
      triggerLocation: {
        coordinates: [Number],
        radius: Number
      },
      beaconId: String
    }],
    downloadUrl: String, // For offline mode
    fileSize: Number
  }],
  
  // Images and Media
  images: [{
    url: String,
    caption: String,
    category: String
  }],
  
  // Visiting Information
  visiting: {
    openHours: {
      monday: String,
      tuesday: String,
      wednesday: String,
      thursday: String,
      friday: String,
      saturday: String,
      sunday: String
    },
    entryFee: {
      indian: Number,
      foreign: Number,
      student: Number
    },
    bestTimeToVisit: String,
    facilities: [String],
    guidelines: [String]
  },
  
  createdAt: { type: Date, default: Date.now }
});

monasterySchema.index({ 'location.coordinates': '2dsphere' });
monasterySchema.index({ name: 'text', description: 'text', 'digitalArchives.tags': 'text' });

module.exports = mongoose.model('Monastery', monasterySchema);