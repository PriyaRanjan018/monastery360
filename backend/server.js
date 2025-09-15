require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/monastery360',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`📍 Host: ${conn.connection.host}`);
    console.log(`📁 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB Connection Failed!');
    console.error('Error:', error.message);
    console.log('\n🔍 Troubleshooting Tips:');
    console.log('1. Make sure MongoDB is running');
    console.log('2. Check your connection string in .env file');
    process.exit(1);
  }
};

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Test Route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend API is working!',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date()
  });
});

// Import and use routes with error handling
try {
  const monasteryRoutes = require('./routes/monasteries');
  app.use('/api/monasteries', monasteryRoutes);
  console.log('✅ Monastery routes loaded');
} catch (error) {
  console.log('⚠️ Monastery routes not found, creating...');
}

try {
  const eventRoutes = require('./routes/events');
  app.use('/api/events', eventRoutes);
  console.log('✅ Event routes loaded');
} catch (error) {
  console.log('⚠️ Event routes not found');
}

try {
  const bookingRoutes = require('./routes/bookings');
  app.use('/api/bookings', bookingRoutes);
  console.log('✅ Booking routes loaded');
} catch (error) {
  console.log('⚠️ Booking routes not found');
}

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`📝 Test endpoint: http://localhost:${PORT}/api/test`);
});