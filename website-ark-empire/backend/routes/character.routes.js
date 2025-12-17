const express = require('express');
const router = express.Router();
const controller = require('../controllers/character.controller');

router.get('/', controller.getCharacters);

module.exports = router;
