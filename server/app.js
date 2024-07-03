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

app.use(cors());

app.use('/api/users', userRoutes)


app.listen(PORT, () => console.log(`server started on ${PORT}`))