// lib/db.js
import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  console.log(
    "MONGODB_URI:",
    process.env.MONGODB_URI ? "✓ Defined" : "✗ Undefined"
  );
  console.log(
    "All env vars:",
    Object.keys(process.env).filter(
      (key) => key.includes("MONGO") || key.includes("NEXT")
    )
  );

  if (!process.env.MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not defined. Please add it to your .env.local file"
    );
  }

  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}

export async function disconnectDB() {
  if (!isConnected) return;

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("MongoDB disconnection failed:", error);
    throw error;
  }
}
