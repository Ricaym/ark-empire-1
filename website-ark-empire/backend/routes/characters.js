import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const data = fs.readFileSync("./data/characters.json", "utf8");
  const characters = JSON.parse(data);
  res.json(characters);
});

export default router;
