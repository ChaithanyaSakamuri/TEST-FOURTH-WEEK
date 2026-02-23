const express = require("express");
const app = express();

// 🔥 VERY IMPORTANT LINE
app.use(express.json());

let users = [];

const logger = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
};

const validate = (req, res, next) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({ message: "Name is required" });
  }
  next();
};

app.use(logger);

app.post("/users", validate, (req, res) => {
  users.push(req.body);
  res.json({ message: "User added", data: req.body });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => console.log("Server running"));