import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import certificateRoutes from "./routes/certificateRoutes.js";

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// ========================
// Middleware
// ========================

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ========================
// Routes
// ========================

app.get("/", (req, res) => {
  res.send("🚀 QR Generator Backend Running...");
});

// Test Route
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "This is my QR Generator Backend",
  });
});

// Certificate Routes
app.use("/api/certificate", certificateRoutes);

// ========================
// Start Server
// ========================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server Running on http://localhost:${PORT}`);
});