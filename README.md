# TEST FOURTH WEEK 🚀

This repository contains Backend practice problems using **Node.js**, **Express.js**, and **MongoDB**.

---

## 📌 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman (API Testing)

---

# 📂 Project Structure

P1 - Static CRUD (Students API)  
P2 - Middleware + Validation  
P3 - Cookie Visit Counter  
P4 - Role Based Access Control  
P5 - MongoDB CRUD (Products API)

---

# 🔹 Problem 1 – Student CRUD API

Built REST APIs using Express.js with static in-memory array.

### Endpoints:

- POST /students
- GET /students
- GET /students/:id
- PUT /students/:id
- DELETE /students/:id

---

# 🔹 Problem 2 – Middleware & Validation

Features:
- Logging Middleware
- Validation Middleware
- Proper usage of `next()`

### Endpoints:
- POST /users
- GET /users

Validation ensures `name` field is required.

---

# 🔹 Problem 3 – Cookie Visit Counter

Tracks number of visits using cookies.

### Endpoints:
- GET /visit
- GET /reset

Uses `cookie-parser`.

---

# 🔹 Problem 4 – Role Based Access Control

Implements simple login system with roles.

### Roles:
- Admin
- Client

### Endpoints:
- POST /login
- GET /dashboard
- GET /logout

Access to `/dashboard` allowed only after login.

---

# 🔹 Problem 5 – MongoDB CRUD (Products API)

Stores product data in MongoDB Atlas.

### Endpoints:
- GET /products
- POST /products
- PUT /products/:id
- DELETE /products/:id

Uses Mongoose for database operations.

---

# 🚀 How To Run Project

### 1️⃣ Install Dependencies

```bash
npm install
