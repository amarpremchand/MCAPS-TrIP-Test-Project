// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/search-movies', async (req, res) => {
  const { title, page } = req.query; 

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: process.env.API_KEY,
        sort_by: 'popularity.desc',
        query: title,
        page: page
      }
      
    });
    res.json(response.data);
  } catch (error) {
    console.error('Search movies failed:', error);
    res.status(500).json({ message: 'Error fetching search results' });
  }
});

app.get('/movies', async (req, res) => {
  const { page } = req.query;

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: process.env.API_KEY,
        page: page
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Discover movies failed:', error);
    res.status(500).json({ message: 'Error fetching discover results' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
