require('dotenv').config();
const mongoose = require('mongoose');

// Simple schema
const monasterySchema = new mongoose.Schema({
  name: String,
  description: String,
  location: {
    district: String,
    coordinates: [Number]
  },
  images: [{
    url: String,
    caption: String
  }]
});

const Monastery = mongoose.model('Monastery', monasterySchema);

const sampleData = [
  {
    name: "Rumtek Monastery",
    description: "The largest monastery in Sikkim",
    location: {
      district: "East Sikkim",
      coordinates: [88.5595, 27.2875]
    },
    images: [{
      url: "https://via.placeholder.com/400x300",
      caption: "Rumtek Monastery"
    }]
  },
  {
    name: "Pemayangtse Monastery",
    description: "One of the oldest monasteries in Sikkim",
    location: {
      district: "West Sikkim",
      coordinates: [88.2520, 27.3053]
    },
    images: [{
      url: "https://via.placeholder.com/400x300",
      caption: "Pemayangtse Monastery"
    }]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/monastery360');
    console.log('Connected to MongoDB');
    
    await Monastery.deleteMany({});
    console.log('Cleared existing data');
    
    const result = await Monastery.insertMany(sampleData);
    console.log(`Added ${result.length} monasteries`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedDatabase();