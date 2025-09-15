const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Monastery360 Backend...\n');

// Create directories if they don't exist
const dirs = ['models', 'routes', 'scripts', 'uploads', 'config', 'middleware'];

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}/`);
  } else {
    console.log(`📁 Directory exists: ${dir}/`);
  }
});

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  const envContent = `# Database
MONGODB_URI=mongodb://localhost:27017/monastery360

# Server
PORT=5000
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:3000

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here_change_in_production`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file');
} else {
  console.log('📁 .env file exists');
}

console.log('\n✅ Setup complete!');
console.log('\nNext steps:');
console.log('1. Make sure MongoDB is running');
console.log('2. Run: npm run dev');
console.log('3. Visit: http://localhost:5000/api/test');