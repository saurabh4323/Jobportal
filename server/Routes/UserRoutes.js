import express from 'express';

const userRoutes = express.Router()

import { authUser, SendOtp, verifyRegistration, listJobs } from '../Controllers/userController.js';

userRoutes.post('/auth', authUser)
userRoutes.post('/sendOtp', SendOtp)
userRoutes.post('/verifyRegister', verifyRegistration)
userRoutes.get('/listJob', listJobs)



export default userRoutes