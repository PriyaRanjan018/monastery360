// Simple Node.js server to run the prototype locally
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// API endpoints for data (simulating database)
app.get('/api/monasteries', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data/monasteries.json'));
    res.json(data);
});

app.get('/api/events', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data/events.json'));
    res.json(data);
});

app.get('/api/tours', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data/tours.json'));
    res.json(data);
});

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Monastery360 running at http://localhost:${PORT}`);
});