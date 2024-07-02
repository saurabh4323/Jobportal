const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appliedJobsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    appliedJobs: [
      {
        jobId: {
          type: Schema.Types.ObjectId,
          ref: "JobPosting",
          required: true,
        },
        appliedDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const AppliedJobs = mongoose.model("AppliedJobs", appliedJobsSchema);

module.exports = AppliedJobs;
