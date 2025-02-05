import express from "express";
import cors from "cors";
import monk from "monk";
import dotenv from "dotenv";
dotenv.config(); // Load .env variables

const app = express();
const db = monk(process.env.MONGO_URI);
const tatianaCollection = db.get("Tatiana-Herwitz");
app.use(cors());
app.use(express.json());

app.get("/api/tatiana", async (req, res) => {
  try {
    const tatiana = await tatianaCollection.findOne({
      name: "Tatiana Herwitz",
    });
    if (!tatiana) return res.status(404).json({ message: "Not Found" });
    res.json(tatiana);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
