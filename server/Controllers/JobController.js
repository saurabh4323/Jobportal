import JobPosting from "../Models/JobPosting";
import asyncHandler from "express-async-handler";


const jobPost = asyncHandler(async (req, res) => {

  const {
    jobTitle,
    jobLocation,
    vacancy,
    jobType,
    jobDescription,
    salaryRange: { min, max },
  } = req.body;

  const companyLogo = req.file && req.file.filename;

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

  if (jobbox) {
    res.status(201).json(jobbox);
  }
  else {
    res.status(400).json({ message: 'Failed to save data' });
  }

});
//hi


export {
  jobPost
}