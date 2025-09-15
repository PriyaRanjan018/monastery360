require('dotenv').config();
const mongoose = require('mongoose');
const Monastery = require('../models/Monastery');

const sampleData = [
  {
    name: "Rumtek Monastery",
    description: "The seat of the Karmapa, head of the Karma Kagyu school of Tibetan Buddhism",
    location: {
      coordinates: [88.5595, 27.2875],
      address: "Rumtek, Gangtok",
      district: "East Sikkim"
    },
    virtualTour: {
      isActive: true,
      panoramaUrl: "https://images.unsplash.com/photo-1609920658906-8223bd289001"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1609920658906-8223bd289001",
        caption: "Main entrance of Rumtek Monastery"
      }
    ]
  },
  {
    name: "Pemayangtse Monastery",
    description: "One of the oldest and most important monasteries in Sikkim",
    location: {
      coordinates: [88.2520, 27.3053],
      address: "Pelling",
      district: "West Sikkim"
    },
    virtualTour: {
      isActive: true,
      panoramaUrl: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
        caption: "Pemayangtse Monastery view"
      }
    ]
  },
  {
    name: "Tashiding Monastery",
    description: "Sacred Buddhist monastery with holy water vase",
    location: {
      coordinates: [88.2473, 27.3482],
      address: "Tashiding",
      district: "West Sikkim"
    },
    virtualTour: {
      isActive: false
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1569155829632-27ebf5f71e42",
        caption: "Tashiding Monastery"
      }
    ]
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Monastery.deleteMany({});
    console.log('🗑️ Cleared existing monasteries');

    // Insert sample data
    const inserted = await Monastery.insertMany(sampleData);
    console.log(`✅ Inserted ${inserted.length} monasteries`);

    // Display inserted data
    console.log('\n📋 Inserted Monasteries:');
    inserted.forEach(m => {
      console.log(`  - ${m.name} (${m.location.district})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();