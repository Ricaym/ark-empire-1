import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/arkEmpire");

const CharacterSchema = new mongoose.Schema({
  name: String,
  class: String,
  hp: Number,
  attack: Number,
  photo: String,
  description: String
});

const Character = mongoose.model("Character", CharacterSchema);

app.get("/characters", async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

app.listen(3000, () => console.log("✅ API running on http://localhost:3000"));
