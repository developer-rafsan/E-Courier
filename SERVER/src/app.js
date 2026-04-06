import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/DB.js";
import errorHandler from "./middleware/errorHandler.js";
import userRoute from "./routes/user.routes.js";

const app = express();

// =============================
// Connect Database
// =============================
connectDB();

// =============================
// Middleware
// =============================

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());


// =============================
// Routes
// =============================
app.use("/api/user", userRoute);

// =============================
// 404 Not Found Handler
// =============================
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

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