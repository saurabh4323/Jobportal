import Recruiters from '../Models/RecruiterModel.js'
import JobPosting from '../Models/JobPosting.js';


import asyncHandler from "express-async-handler";
import OTP from "../Models/otpModel.js";
import nodeMailer from "nodemailer";
import generateOtp from "generate-otp";
import recruitergenerateToken from "../Utils/RecruiterGenerateToken.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
dotenv.config();


// authentication Recruiter

const authRecruiter = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const recruiter = await Recruiters.findOne({ email });

    if (!recruiter) {
        res.status(400);
        throw new Error("email does't exist");
    }

    if (recruiter && (await recruiter.matchPassword(password))) {
        recruitergenerateToken(res, recruiter._id);

        res.status(200).json({
            _id: recruiter._id,
            userName: recruiter.fullName,
            email: recruiter.email,
            mobile: recruiter.mobile,
            companyName: recruiter.companyName,
            profilePic: recruiter.profilePic,
        });
    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
});


//register user

const SendOtp = asyncHandler(async (req, res) => {
    const { email, mobile } = req.body;

    const findEmail = await Recruiters.findOne({ email });
    if (findEmail) {
        res.status(400);
        throw new Error("Email already exists");
    }
    const findMobile = await Recruiters.findOne({ mobile });
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


const verifyRecruiterRegistration = asyncHandler(async (req, res) => {
    const { fullName, email, mobile, companyName, password, otp } = req.body;

    const otpDocument = await OTP.findOne({ email, otp });

    if (!otpDocument) {
        res.status(400);
        throw new Error("invalid OTP");
    }
    const recruiter = await Recruiters.create({
        fullName,
        email,
        mobile,
        companyName,
        password,
    });
    if (recruiter) {
        res.status(201).json({
            _id: recruiter._id,
            userName: recruiter.fullName,
            email: recruiter.email,
            mobile: recruiter.mobile,
            companyName: recruiter.companyName,
            image: recruiter.profilePic,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});



const listMyJobs = asyncHandler(async (req, res) => {
    const recruiterId = req.query.recruiterId;

    const myJobs = await JobPosting.aggregate([
        {
            $match: { recruiter: new mongoose.Types.ObjectId(recruiterId) }
        }
    ]);


    res.status(201).json({ data: myJobs });
});



export { authRecruiter, SendOtp, verifyRecruiterRegistration, listMyJobs };
