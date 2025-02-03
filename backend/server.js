import express from "express";
import cors from "cors";
import monk from "monk";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/employee"; // Default for Docker
const app = express();
const db = monk(MONGO_URI);
const tatianaCollection = db.get("Tatiana-Herwitz");

app.use(cors());
app.use(express.json());

app.get("/api/tatiana", async (req, res) => {
  try {
    const tatiana = await tatianaCollection.findOne({ name: "Tatiana Herwitz" });
    if (!tatiana) return res.status(404).json({ message: "Not Found" });
    res.json(tatiana);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
