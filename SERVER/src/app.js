import "dotenv/config";
import express from "express";
import connectDB from "./config/DB.js";
import cors from "cors";


const app = express(); 

// =============================
// Connect Database
// =============================
connectDB();

// =============================
// Middleware
// =============================
app.use(cors());
app.use(express.json());

// =============================
// Routes
// =============================


// =============================
// Server Listen
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});