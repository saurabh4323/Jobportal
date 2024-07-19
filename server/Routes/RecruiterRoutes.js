import Express from 'express'
const recruiterRoutes = Express.Router()

import {jobPost } from '../Controllers/JobController.js'
import CompanyLogoUpload from '../Config/JobPostdb.js'


recruiterRoutes.post('/createjob', CompanyLogoUpload.single('companyLogo'), jobPost)


export default recruiterRoutes
