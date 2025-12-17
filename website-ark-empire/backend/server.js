require('dotenv').config();
const express = require('express');
const cors = require('cors');

const characterRoutes = require('./routes/character.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/characters', characterRoutes);

app.listen(3001, () => {
  console.log('Backend lancé sur http://localhost:3001');
});
