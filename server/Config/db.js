import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDb