require('dotenv').config();
const mongoose = require('mongoose');

const monasterySchema = new mongoose.Schema({
  name: String,
  description: String,
  location: {
    coordinates: [Number],
    address: String,
    district: String,
    altitude: Number,
    googleMapsUrl: String,
    nearbyAttractions: Array,
    transportOptions: Array
  },
  virtualTour: {
    isActive: Boolean,
    scenes: Array,
    defaultSceneId: String
  },
  digitalArchives: Array,
  audioGuides: Array,
  images: Array,
  visiting: Object
});

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  monastery: mongoose.Schema.Types.ObjectId,
  type: String,
  dates: Object,
  participation: Object,
  languages: Array,
  isActive: Boolean
});

const Monastery = mongoose.model('Monastery', monasterySchema);
const Event = mongoose.model('Event', eventSchema);

const sampleMonasteries = [
  {
    name: "Rumtek Monastery",
    description: "The seat of the Karmapa, largest monastery in Sikkim with golden stupa",
    location: {
      coordinates: [88.5595, 27.2875],
      address: "Rumtek, Gangtok, Sikkim 737135",
      district: "East Sikkim",
      altitude: 1500,
      googleMapsUrl: "https://maps.google.com/?q=27.2875,88.5595",
      nearbyAttractions: [
        {
          name: "Gangtok City",
          type: "City",
          distance: 24,
          description: "Capital city with markets and restaurants"
        },
        {
          name: "Banjhakri Falls",
          type: "Waterfall",
          distance: 12,
          description: "Beautiful waterfall with park"
        }
      ],
      transportOptions: [
        {
          type: "Taxi",
          provider: "Gangtok Taxi Union",
          contact: "+91-9876543210",
          price: 800,
          duration: "45 minutes",
          bookingUrl: "https://sikkimtourism.gov.in/transport"
        },
        {
          type: "Bus",
          provider: "SNT Bus Service",
          contact: "+91-9876543211",
          price: 50,
          duration: "1.5 hours"
        }
      ]
    },
    virtualTour: {
      isActive: true,
      scenes: [
        {
          id: "main-hall",
          name: "Main Prayer Hall",
          panoramaUrl: "https://pannellum.org/images/alma.jpg",
          thumbnailUrl: "https://via.placeholder.com/150",
          hotspots: [
            {
              id: "h1",
              position: { yaw: 30, pitch: 10 },
              type: "info",
              title: "Golden Buddha Statue",
              content: "16th century golden Buddha statue, 20 feet tall"
            },
            {
              id: "h2",
              position: { yaw: -45, pitch: 0 },
              type: "navigation",
              title: "Go to Courtyard",
              targetSceneId: "courtyard"
            }
          ],
          narration: [
            {
              language: "English",
              audioUrl: "/audio/rumtek-main-hall-en.mp3",
              transcript: "Welcome to the main prayer hall of Rumtek Monastery..."
            },
            {
              language: "Hindi",
              audioUrl: "/audio/rumtek-main-hall-hi.mp3",
              transcript: "रुमटेक मठ के मुख्य प्रार्थना हॉल में आपका स्वागत है..."
            }
          ]
        },
        {
          id: "courtyard",
          name: "Monastery Courtyard",
          panoramaUrl: "https://pannellum.org/images/cerro-toco-0.jpg",
          thumbnailUrl: "https://via.placeholder.com/150",
          hotspots: []
        }
      ],
      defaultSceneId: "main-hall"
    },
    digitalArchives: [
      {
        id: "manuscript-001",
        title: "Ancient Tibetan Prayer Manuscript",
        type: "manuscript",
        description: "300-year-old handwritten prayer book with gold ink",
        imageUrl: "https://via.placeholder.com/800x600",
        highResUrl: "https://via.placeholder.com/2000x1500",
        thumbnailUrl: "https://via.placeholder.com/200x150",
        period: "18th Century",
        language: "Tibetan",
        tags: ["prayer", "tibetan", "manuscript", "gold-ink", "rare"],
        aiAnalysis: {
          extractedText: "Om Mani Padme Hum...",
          categories: ["Religious Text", "Prayer Book", "Historical Document"],
          significance: "High - Rare example of gold ink calligraphy",
          relatedItems: ["manuscript-002", "manuscript-003"]
        },
        downloadable: true
      },
      {
        id: "mural-001",
        title: "Wheel of Life Mural",
        type: "mural",
        description: "Ancient mural depicting the Buddhist Wheel of Life",
        imageUrl: "https://via.placeholder.com/800x600",
        period: "17th Century",
        tags: ["mural", "wheel-of-life", "buddhist-art"],
        aiAnalysis: {
          categories: ["Religious Art", "Mural", "Buddhist Iconography"],
          significance: "Very High - Complete depiction of Samsara"
        }
      }
    ],
    audioGuides: [
      {
        id: "guide-en",
        language: "English",
        languageCode: "en",
        narrator: "Dr. Tenzin Norbu",
        sections: [
          {
            id: "entrance",
            title: "Monastery Entrance",
            audioUrl: "/audio/entrance-en.mp3",
            duration: 180,
            transcript: "As you enter the monastery gates...",
            triggerLocation: {
              coordinates: [88.5595, 27.2875],
              radius: 10
            },
            beaconId: "BEACON-001"
          },
          {
            id: "prayer-hall",
            title: "Main Prayer Hall",
            audioUrl: "/audio/prayer-hall-en.mp3",
            duration: 240,
            transcript: "The main prayer hall houses...",
            beaconId: "BEACON-002"
          }
        ],
        downloadUrl: "/audio/rumtek-complete-en.zip",
        fileSize: 45000000 // 45MB
      },
      {
        id: "guide-hi",
        language: "Hindi",
        languageCode: "hi",
        narrator: "डॉ. तेनज़िन नोरबू",
        sections: [],
        downloadUrl: "/audio/rumtek-complete-hi.zip",
        fileSize: 42000000
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1609920658906-8223bd289001",
        caption: "Rumtek Monastery Main Building",
        category: "exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
        caption: "Prayer Hall Interior",
        category: "interior"
      }
    ],
    visiting: {
      openHours: {
        monday: "6:00 AM - 6:00 PM",
        tuesday: "6:00 AM - 6:00 PM",
        wednesday: "6:00 AM - 6:00 PM",
        thursday: "6:00 AM - 6:00 PM",
        friday: "6:00 AM - 6:00 PM",
        saturday: "6:00 AM - 7:00 PM",
        sunday: "6:00 AM - 7:00 PM"
      },
      entryFee: {
        indian: 10,
        foreign: 100,
        student: 5
      },
      bestTimeToVisit: "October to May",
      facilities: ["Parking", "Restrooms", "Cafeteria", "Gift Shop", "Guided Tours"],
      guidelines: [
        "Remove shoes before entering prayer halls",
        "Photography allowed in courtyard only",
        "Maintain silence in prayer areas",
        "Dress modestly"
      ]
    }
  },
  {
    name: "Pemayangtse Monastery",
    description: "One of the oldest monasteries, offering panoramic views of Kanchenjunga",
    location: {
      coordinates: [88.2520, 27.3053],
      address: "Pelling, West Sikkim",
      district: "West Sikkim",
      altitude: 2085,
      nearbyAttractions: [
        {
          name: "Pelling Skywalk",
          type: "Attraction",
          distance: 2,
          description: "Glass skywalk with mountain views"
        }
      ],
      transportOptions: [
        {
          type: "Taxi",
          provider: "Pelling Taxi Stand",
          contact: "+91-9876543212",
          price: 200,
          duration: "10 minutes from Pelling"
        }
      ]
    },
    virtualTour: {
      isActive: true,
      scenes: [],
      defaultSceneId: ""
    },
    digitalArchives: [],
    audioGuides: [],
    images: [
      {
        url: "https://images.unsplash.com/photo-1569155829632-27ebf5f71e42",
        caption: "Pemayangtse Monastery",
        category: "exterior"
      }
    ],
    visiting: {
      openHours: {
        monday: "7:00 AM - 5:00 PM",
        tuesday: "7:00 AM - 5:00 PM",
        wednesday: "7:00 AM - 5:00 PM",
        thursday: "7:00 AM - 5:00 PM",
        friday: "7:00 AM - 5:00 PM",
        saturday: "7:00 AM - 5:00 PM",
        sunday: "7:00 AM - 5:00 PM"
      },
      entryFee: {
        indian: 20,
        foreign: 50,
        student: 10
      },
      bestTimeToVisit: "March to June, September to December",
      facilities: ["Parking", "Restrooms", "Photography allowed"],
      guidelines: ["Remove shoes", "No flash photography inside"]
    }
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/monastery360');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Monastery.deleteMany({});
    await Event.deleteMany({});
    console.log('Cleared existing data');

    // Insert monasteries
    const monasteries = await Monastery.insertMany(sampleMonasteries);
    console.log(`Added ${monasteries.length} monasteries`);

    // Create sample events
    const sampleEvents = [
      {
        title: "Losar Festival 2024",
        description: "Tibetan New Year celebration with traditional mask dances",
        monastery: monasteries[0]._id,
        type: "festival",
        dates: {
          start: new Date('2024-02-10'),
          end: new Date('2024-02-12')
        },
        participation: {
          isOpen: true,
          capacity: 500,
          currentBookings: 127,
          price: {
            indian: 0,
            foreign: 0
          },
          requirements: ["Respectful attire required"]
        },
        languages: ["English", "Hindi", "Tibetan"],
        isActive: true
      },
      {
        title: "Meditation Retreat",
        description: "3-day meditation and mindfulness retreat",
        monastery: monasteries[0]._id,
        type: "retreat",
        dates: {
          start: new Date('2024-03-15'),
          end: new Date('2024-03-17')
        },
        participation: {
          isOpen: true,
          capacity: 30,
          currentBookings: 12,
          price: {
            indian: 2000,
            foreign: 3000
          },
          requirements: ["Prior meditation experience helpful", "Bring cushion"]
        },
        languages: ["English", "Hindi"],
        isActive: true
      },
      {
        title: "Full Moon Prayer Ceremony",
        description: "Monthly prayer ceremony on full moon day",
        monastery: monasteries[1]._id,
        type: "ritual",
        dates: {
          start: new Date('2024-01-25'),
          end: new Date('2024-01-25')
        },
        recurrence: {
          isRecurring: true,
          pattern: "monthly"
        },
        participation: {
          isOpen: true,
          capacity: 100,
          price: {
            indian: 0,
            foreign: 0
          }
        },
        languages: ["Tibetan"],
        isActive: true
      }
    ];

    const events = await Event.insertMany(sampleEvents);
    console.log(`Added ${events.length} events`);

    console.log('\n✅ Database seeded successfully with all features!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedDatabase();