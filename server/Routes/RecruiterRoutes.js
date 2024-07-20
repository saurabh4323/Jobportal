import Express from 'express'
const recruiterRoutes = Express.Router()

import { editJob, jobPost } from '../Controllers/JobController.js'
import { authRecruiter, SendOtp, verifyRecruiterRegistration, listMyJobs } from '../Controllers/RecruiterController.js'
import CompanyLogoUpload from '../Config/JobPostdb.js'


recruiterRoutes.post('/authRecruiter', authRecruiter)
recruiterRoutes.post('/recruiterSendOtp', SendOtp)
recruiterRoutes.post('/verifyRecruiter', verifyRecruiterRegistration)
recruiterRoutes.get('/listMyjobs', listMyJobs)


recruiterRoutes.post('/createjob', CompanyLogoUpload.single('companyLogo'), jobPost)
recruiterRoutes.post('/editjob', editJob)


export default recruiterRoutes
