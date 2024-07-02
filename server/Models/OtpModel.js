import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    otp: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

// Manually create TTL index
otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });


const OTP = mongoose.model("OTP", otpSchema);

export default OTP;