const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobPostingSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    jobLocation: {
      type: String,
      required: true,
      trim: true,
    },
    vacancy: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Temporary", "Internship"],
      required: true,
    },
    companyLogo: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    salaryRange: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
      recruiter: {
        type: Schema.Types.ObjectId,
        ref: "RecruiterModel",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const JobPosting = mongoose.model("JobPosting", jobPostingSchema);

module.exports = JobPosting;
