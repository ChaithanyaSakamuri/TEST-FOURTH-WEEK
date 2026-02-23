const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Chaithanya", age: 21, course: "Math" },
  { id: 2, name: "Viajy", age: 22, course: "Physics" }
];

app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    ...req.body
  };
  students.push(newStudent);
  res.json(newStudent);
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});

app.put("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  students[index] = { id: Number(req.params.id), ...req.body };
  res.json(students[index]);
});

app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Deleted Successfully" });
});

app.listen(3000, () => console.log("Server running on port 3000"));