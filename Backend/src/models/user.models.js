import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
      unique: true,
      default: () => `USR_${Date.now()}`
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: Number,
      required: false, // 👈 make optional
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
