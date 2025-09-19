const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 5000;

app.use(express.json());

const uri = "mongodb+srv://avantikajuyal:1331juyal@cluster0.5ukzp3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // keep your own connection string
const client = new MongoClient(uri);

async function start() {
  try {
    await client.connect();
    console.log(" Connected to MongoDB Atlas");

    const db = client.db("crudDB");
    const projects = db.collection("projects");

    // POST - Create
    app.post("/api/projects", async (req, res) => {
      // debug logs — look at your terminal when you send the request
      console.log("----- Incoming POST /api/projects -----");
      console.log("Headers:", req.headers);
      console.log("Body:", req.body);

      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Request body is missing" });
      }

      const result = await projects.insertOne(req.body);
      res.json({ message: "Project added", id: result.insertedId });
    });

    // GET - Read
    app.get("/api/projects", async (req, res) => {
      const all = await projects.find().toArray();
      res.json(all);
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Error:", err);
  }
}

start();
