const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;

 const MONGO_URI = "mongodb+srv://avantikajuyal:3131juyal@cluster0.y0cap0z.mongodb.net/resumeData?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas successfully!"))
.catch((err) => console.error("❌ Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
  res.send("ResumeData Server is Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

