import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";

const recruiterSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
        },
        companyName: {
            type: String
        },
        password: {
            type: String,
        },
        profilePic: {
            type: String,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        }
    },
    {
        timestamps: true,
    }
);

// Match recruiter entered password to hashed password in database
recruiterSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
recruiterSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Recruiters = mongoose.model("Recruiters", recruiterSchema);
export default Recruiters;