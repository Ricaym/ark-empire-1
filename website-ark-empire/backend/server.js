import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import connectDB from "./config/db.js";
import charactersRoutes from "./routes/characters.js";
import characterRoutes from "./models/Character.js";

dotenv.config();
// connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/characters", charactersRoutes);

app.use("/character", characterRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});