import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import UserRoutes from "./routes/user.routes.js";

const app = express();

// ----------------------
// MIDDLEWARES
// ----------------------

// CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

// JSON parser
app.use(express.json());

// URL encoded
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// ----------------------
// ROUTES
// ----------------------

app.use("/api/v1/users", UserRoutes);

// Health check (optional but recommended)
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
  });
});

// 404 route
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

export default app;
