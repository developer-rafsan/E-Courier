import "dotenv/config";
import express from "express";
import connectDB from "./config/DB.js";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import customError from "./utils/customError.js";


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
// Global Error Handler
// =============================
app.use(errorHandler);

// =============================
// Server Listen
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});