const express = require("express");
const app = express();

app.use(express.json());

let currentUser = null;

// LOGIN API
app.post("/login", (req, res) => {
  const { role } = req.body;

  if (role !== "Admin" && role !== "Client") {
    return res.status(400).json({ message: "Invalid role" });
  }

  currentUser = role;
  res.json({ message: `${role} LoggedIn` });
});

// DASHBOARD API
app.get("/dashboard", (req, res) => {
  if (!currentUser) {
    return res.status(401).json({ message: "Please login first" });
  }

  res.json({ message: `Welcome ${currentUser}` });
});

// LOGOUT API
app.get("/logout", (req, res) => {
  if (!currentUser) {
    return res.status(400).json({ message: "No user logged in" });
  }

  currentUser = null;
  res.json({ message: "Logged out successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});