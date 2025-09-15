require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing MongoDB Atlas connection...');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('Your website can now work from anywhere!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
    console.log('Check your connection string and network access settings');
    process.exit(1);
  });