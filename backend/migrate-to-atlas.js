require('dotenv').config();
const mongoose = require('mongoose');

// Your LOCAL database
const LOCAL_URI = 'mongodb://localhost:27017/monastery360';

// Your ATLAS database (from .env)
const ATLAS_URI = process.env.MONGODB_URI;

console.log('🚀 Starting migration to MongoDB Atlas...');

async function migrateData() {
  let localConn = null;
  let atlasConn = null;
  
  try {
    // Connect to local MongoDB
    localConn = await mongoose.createConnection(LOCAL_URI).asPromise();
    console.log('✅ Connected to local MongoDB');
    
    // Connect to Atlas
    atlasConn = await mongoose.createConnection(ATLAS_URI).asPromise();
    console.log('✅ Connected to MongoDB Atlas');
    
    // Define schemas for both connections
    const monasterySchema = new mongoose.Schema({
      name: String,
      description: String,
      location: Object,
      virtualTour: Object,
      digitalArchives: Array,
      audioGuides: Array,
      images: Array,
      visiting: Object,
      createdAt: Date
    }, { strict: false });

    const eventSchema = new mongoose.Schema({
      title: String,
      description: String,
      monastery: mongoose.Schema.Types.ObjectId,
      type: String,
      dates: Object,
      participation: Object,
      languages: Array,
      isActive: Boolean
    }, { strict: false });

    const bookingSchema = new mongoose.Schema({
      bookingId: String,
      event: mongoose.Schema.Types.ObjectId,
      userDetails: Object,
      bookingDate: Date,
      status: String,
      payment: Object
    }, { strict: false });

    // Create models for local database
    const LocalMonastery = localConn.model('Monastery', monasterySchema);
    const LocalEvent = localConn.model('Event', eventSchema);
    const LocalBooking = localConn.model('Booking', bookingSchema);

    // Create models for Atlas database
    const AtlasMonastery = atlasConn.model('Monastery', monasterySchema);
    const AtlasEvent = atlasConn.model('Event', eventSchema);
    const AtlasBooking = atlasConn.model('Booking', bookingSchema);

    // Migrate Monasteries
    console.log('\n📦 Migrating Monasteries...');
    const monasteries = await LocalMonastery.find({});
    console.log(`  Found ${monasteries.length} monasteries`);
    
    if (monasteries.length > 0) {
      await AtlasMonastery.deleteMany({});
      await AtlasMonastery.insertMany(monasteries);
      console.log(`  ✅ Migrated ${monasteries.length} monasteries`);
    }

    // Migrate Events
    console.log('\n📦 Migrating Events...');
    const events = await LocalEvent.find({});
    console.log(`  Found ${events.length} events`);
    
    if (events.length > 0) {
      await AtlasEvent.deleteMany({});
      await AtlasEvent.insertMany(events);
      console.log(`  ✅ Migrated ${events.length} events`);
    }

    // Migrate Bookings (if any)
    console.log('\n📦 Migrating Bookings...');
    try {
      const bookings = await LocalBooking.find({});
      console.log(`  Found ${bookings.length} bookings`);
      
      if (bookings.length > 0) {
        await AtlasBooking.deleteMany({});
        await AtlasBooking.insertMany(bookings);
        console.log(`  ✅ Migrated ${bookings.length} bookings`);
      }
    } catch (error) {
      console.log('  No bookings collection found (this is okay)');
    }

    console.log('\n🎉 Migration completed successfully!');
    console.log('Your data is now in MongoDB Atlas cloud!');
    
    // Close connections
    await localConn.close();
    await atlasConn.close();
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    
    // Close connections if they exist
    if (localConn) await localConn.close();
    if (atlasConn) await atlasConn.close();
    
    process.exit(1);
  }
}

// Run migration
migrateData();