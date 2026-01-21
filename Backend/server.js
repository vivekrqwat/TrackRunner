import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDb from "./src/Db/index.js";
import app from "./src/app.js"; // your express app

// --- Resolve __dirname for ES modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Load ENV FIRST ---
dotenv.config({
  path: path.join(__dirname, ".env"),
});

// --- Validate ENV ---
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI missing in .env");
  process.exit(1);
}

const PORT = process.env.PORT || 8000;

// --- Start Server ONLY after DB connects ---
const startServer = async () => {
  try {
    console.log("Loading DB...");
    await connectDb();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
