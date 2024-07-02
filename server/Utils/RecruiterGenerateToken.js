import jwt from "jsonwebtoken";

const recruitergenerateToken = (res, recruiterId) => {
    const token = jwt.sign({ recruiterId }, process.env.JWT_CODE, {
        expiresIn: "30d",
    });

    res.cookie("RecruiterJwt", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
};

export default recruitergenerateToken;