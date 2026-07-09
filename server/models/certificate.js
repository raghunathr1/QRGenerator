import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,
      unique: true,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: String,

    course: String,

    role: String,

    startDate: Date,

    endDate: Date,

    issueDate: Date,

    qrCode: String,

    status: {
      type: String,
      default: "Verified",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Certificate", certificateSchema);