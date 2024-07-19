import mongoose from "mongoose";
const Schema = mongoose.Schema;

const applicationSchema = new Schema(
  {
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "JobPosting",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    joinDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Applications = mongoose.model("Applications", applicationSchema);

export default Applications;
