import JobPosting from "../Models/JobPosting";
import asyncHandler from "express-async-handler";

export const jobPost = asyncHandler(async (req, res) => {
  const {
    jobTitle,
    jobLocation,
    vacancy,
    jobType,
    companyLogo,
    jobDescription,
    salaryRange: { min, max },
  } = req.body;

  const jobbox = await JobPosting.create({
    jobTitle,
    jobLocation,
    vacancy,
    jobType,
    companyLogo,
    jobDescription,
    salaryRange: { min, max },
    recruiter: recruiterId,
  });

  res.status(201).json(jobbox);
});
//hi
