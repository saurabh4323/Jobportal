import express from 'express';

const userRoutes = express.Router()

import { authUser,SendOtp,verifyRegistration } from '../Controllers/userController.js';

userRoutes.post('/auth', authUser)
userRoutes.post('/sendOtp',SendOtp)
userRoutes.post('/verifyRegister',verifyRegistration)


export default userRoutes