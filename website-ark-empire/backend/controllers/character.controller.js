const characterModel = require('../models/character.model');

async function getCharacters(req, res) {
  try {
    const characters = await characterModel.getAllCharacters();
    res.json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

module.exports = { getCharacters };
