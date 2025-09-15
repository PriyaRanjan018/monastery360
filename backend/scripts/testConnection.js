require('dotenv').config();
const connectDB = require('../config/database');
const Test = require('../models/test');

const testDatabaseConnection = async () => {
  try {
    // Connect to database
    await connectDB();
    
    // Create a test document
    const testDoc = new Test({
      message: 'Database connection successful!'
    });
    
    // Save to database
    const saved = await testDoc.save();
    console.log('✅ Test document saved:', saved);
    
    // Read from database
    const found = await Test.findById(saved._id);
    console.log('✅ Test document retrieved:', found);
    
    // Delete test document
    await Test.findByIdAndDelete(saved._id);
    console.log('✅ Test document deleted');
    
    console.log('\n🎉 Database connection test completed successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
    process.exit(1);
  }
};

testDatabaseConnection();