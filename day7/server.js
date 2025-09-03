const express = require('express');
const app = express();
const PORT = 3000;
//app.get('/', (req, res) => {
  //res.send('🎉 Welcome to Day-7 Challenge! Visit /api to check the API.');
//});
app.get('/api', (req, res) => {
  res.json({ message: "API is running!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

