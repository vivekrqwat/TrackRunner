import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if(mongoose.connection.readyState==1)return mongoose.connection;
    await mongoose.connect(`${process.env.MONGODB_URI}/TrackRunner`);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDb;
