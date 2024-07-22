import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from "cookie-parser";
import connectDb from './Config/db.js'
import { notFound, errorHandler } from './Middlewares/ErrorHandlers.js'
import userRoutes from './Routes/UserRoutes.js';
import cors from 'cors'
import path from 'path';
const PORT = process.env.PORT || 5000
const app = express()

connectDb()

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cookieParser())
app.use(express.static("server/Public"));

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on ${PORT}`))