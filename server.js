// console.log("Web serverni boshlash");
// const express = require('express');
// const app = express();
// const http = require('http');

// // 1. Middleware
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2. Views setup
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 3. Routes
// app.get("/", function(req, res) {
//     res.end('HELLO WORLD');
// });

// // 4. Server
// const server = http.createServer(app);
// const PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`The server is running successfully on port: ${PORT}`);
// });
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// ========== MIDDLEWARE ==========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ========== VIEW ENGINE SETUP ==========
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ========== DATA STORAGE (Mock Database) ==========
let items = [];

// ========== ROUTES ==========

// Home Route
app.get("/", (req, res) => {
  res.render("index", { 
    title: "EJS Framework - Home",
    items: items,
    itemCount: items.length 
  });
});

// Shop Route
app.get("/shop", (req, res) => {
  res.render("shop", { 
    title: "Shopping Page",
    items: items 
  });
});

// About Route
app.get("/about", (req, res) => {
  res.render("about", { 
    title: "About Us" 
  });
});

// Add Item (POST)
app.post("/add-item", (req, res) => {
  const { itemName, itemPrice } = req.body;
  
  if (itemName && itemPrice) {
    const newItem = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
      date: new Date().toLocaleDateString()
    };
    items.push(newItem);
    console.log("✅ Item added:", newItem);
  }
  
  res.redirect("/shop");
});

// Delete Item
app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  items = items.filter(item => item.id != id);
  console.log("🗑️ Item deleted, ID:", id);
  res.redirect("/shop");
});

// API: Get all items
app.get("/api/items", (req, res) => {
  res.json({ 
    success: true,
    count: items.length,
    items: items 
  });
});

// ========== ERROR HANDLING ==========
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  res.status(500).render("error", { 
    title: "Error Page",
    message: "Something went wrong!" 
  });
});

// 404 Not Found
app.use((req, res) => {
  res.status(404).render("404", { 
    title: "Page Not Found" 
  });
});

// ========== START SERVER ==========
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════╗
║   🚀 Server Running Successfully   ║
║   📍 http://localhost:${PORT}        ║
║   📦 Total Items: ${items.length}                  ║
╚════════════════════════════════════╝
  `);
});
// Updated: 2025-09-01 09:30:00
// Updated: 2025-09-10 09:00:00
// Updated: 2025-09-20 09:45:00
