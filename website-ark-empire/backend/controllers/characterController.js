import Character from "../models/Character.js";

export const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
