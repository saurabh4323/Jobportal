import Users from "../Models/userModel.js";
import Applications from '../Models/Application.js'
import JobPosting from "../Models/JobPosting.js";


import asyncHandler from "express-async-handler";
import OTP from "../Models/otpModel.js";
import nodeMailer from "nodemailer";
import generateOtp from "generate-otp";
import generateToken from "../Utils/UserGenerateToken.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
dotenv.config();

// authentication user

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });
  console.log(req.body);

  if (!user) {
    res.status(400);
    throw new Error("email does't exist");
  }

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      mobile: user.mobile,
      profilePic: user.profilePic,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});


//register user

const SendOtp = asyncHandler(async (req, res) => {
  const { email, mobile } = req.body;

  const findEmail = await Users.findOne({ email });
  if (findEmail) {
    res.status(400);
    throw new Error("Email already exists");
  }
  const findMobile = await Users.findOne({ mobile });
  if (findMobile) {
    res.status(400);
    throw new Error("mobile number already in use");
  }

  const otp = generateOtp.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "OTP for Verification",
    text: `Your OTP for verification is: ${otp}`,
  };

  try {
    await OTP.create({ email, otp });
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});


const verifyRegistration = asyncHandler(async (req, res) => {
  const { userName, email, mobile, password, otp } = req.body;

  const otpDocument = await OTP.findOne({ email, otp });

  if (!otpDocument) {
    res.status(400);
    throw new Error("invalid OTP");
  }
  const user = await Users.create({
    userName,
    email,
    mobile,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      mobile: user.mobile,
      image: user.profilePic,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});



const listJobs = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // Get the list of job IDs that the user has applied for
  const appliedJobIds = (await Applications.find({ userId }).distinct("jobId")).map(id => id.toString());

  // Find all jobs
  const allJobs = await JobPosting.find().sort({ createdAt: -1 });

  // Additional filter to exclude applied jobs
  const jobsNotApplied = allJobs.filter(
    (job) => !appliedJobIds.includes(job._id.toString())
  );


  if (jobsNotApplied.length > 0) {
    res.json(jobsNotApplied);
  } else {
    res.json(allJobs);
  }
});

export { authUser, SendOtp, verifyRegistration , listJobs };
