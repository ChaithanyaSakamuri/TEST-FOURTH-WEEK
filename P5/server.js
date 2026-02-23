const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://chaitumuo_db_user:chaitu123@cluster0.ufzfjx7.mongodb.net/UserDb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);


app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


// ✅ CREATE PRODUCT
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});


// ✅ UPDATE PRODUCT
app.put("/products/:id", async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedProduct);
});


// ✅ DELETE PRODUCT
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product Deleted" });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});