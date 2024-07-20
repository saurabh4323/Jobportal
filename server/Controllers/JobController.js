import JobPosting from "../Models/JobPosting.js";
import asyncHandler from "express-async-handler";


const jobPost = asyncHandler(async (req, res) => {
  const recruiterId = req.recruiter._id

  const {
    jobTitle,
    jobLocation,
    vacancy,
    jobType,
    jobDescription,
    salaryRange
  } = req.body;

  const companyLogo = req.file && req.file.filename;

  const jobbox = await JobPosting.create({
    jobTitle,
    jobLocation,
    vacancy,
    jobType,
    companyLogo,
    jobDescription,
    salaryRange,
    recruiter: recruiterId,
  });

  if (jobbox) {
    res.status(201).json(jobbox);
  }
  else {
    res.status(400).json({ message: 'Failed to save data' });
  }

});


const editJob = asyncHandler(async (req, res) => {
  const { id, jobTitle, jobLocation, vacancy, jobType, jobDescription, salaryRange } = req.body

  let updateJob = await JobPosting.findByIdAndUpdate(id, { jobTitle: jobTitle, jobLocation: jobLocation, jobDescription: jobDescription, vacancy: vacancy, jobType: jobType, salaryRange: salaryRange })

  if (updateJob) {
    res.status(200).json({ status: true })
  }
  else {
    res.status(400)
    throw new Error('server error')
  }

})


export {
  jobPost,
  editJob
}