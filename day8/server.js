const express = require("express");
const app = express();
const PORT = 3000;
const projects = [
  { id: 1, name: "business card", tech: "HTML, CSS, JS" },
  { id: 2, name: "quote generator", tech: "HTML, CSS, JS" },
  { id: 3, name: "calculator", tech: "HTML, CSS, JS" }
];
const experience = [
  { id: 1, company: "codsoft", role: " java developer", duration: "1 months" },
  { id: 2, company: "Codsoft", role: "web developer", duration: "1months" }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});


app.get("/api/experience", (req, res) => {
  res.json(experience);
});

app.get("/api/projects/:id", (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);

  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});