import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Recruiters from "../Models/RecruiterModel.js";


const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.RecruiterJwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_CODE);

            const recruiter = await Recruiters.findById(decoded.recruiterId).select("-password");

            if (!recruiter) {
                res.status(400);
                return res.json({ message: "Not authorized, recruiter not found" });
            }
            else {
                req.recruiter = recruiter;
                next();
            }
        } catch (error) {
            console.error(error);
            res.status(401);
            return res.json({ message: "Not authorized, token failed" });
        }
    } else {
        res.status(401);
        return res.json({ message: "Not authorized, no token recruiter" });
    }
});

export { protect };
