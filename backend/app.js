const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27002/portfolio-mongodb';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes (add your routes here)
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Example endpoint for blog posts
app.get('/api/posts', (req, res) => {
    res.json([
        { title: 'Blog Post 1', content: 'Content of blog post 1' },
        { title: 'Blog Post 2', content: 'Content of blog post 2' },
    ]);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
