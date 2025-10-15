import mongoose from "mongoose";
import express from "express";
import fs from "fs";

const router = express.Router();

const CharacterSchema = new mongoose.Schema({
  name: String,
  class: String,
  hp: Number,
  attack: Number,
  photo: String,
  description: String
});

router.post("/", (req, res) => {
  try {
    const newChar = req.body;
    if (!newChar || !newChar.name) {
      return res.status(400).json({ error: "Missing required field: name" });
    }

    const filePath = "./data/characters.json";
    let characters = [];

    try {
      const raw = fs.readFileSync(filePath, "utf8");
      characters = raw ? JSON.parse(raw) : [];
    } catch (e) {
      // if file doesn't exist or is invalid, start with empty array
      characters = [];
    }

    // assign an id if none provided
    if (!newChar.id && !newChar._id) {
      newChar.id = Date.now().toString();
    }

    characters.push(newChar);
    fs.writeFileSync(filePath, JSON.stringify(characters, null, 2), "utf8");

    res.status(201).json(newChar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default mongoose.model("Character", CharacterSchema);
