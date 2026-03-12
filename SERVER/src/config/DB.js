import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI_LOCAL || process.env.MONGODB_URI_LIVE;
console.log(DB_URI);

const connectDB = async () => {
  try {
    if (!DB_URI) {
      throw new Error("MongoDB URI not found in environment variables");
    }

    await mongoose.connect(DB_URI);

    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;