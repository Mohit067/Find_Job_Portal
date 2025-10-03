import express from "express";
import { changeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJob, loginCompany, postJob, registerCompany } from "../controllers/companyController.js";
import upload from "../config/multer.js";

const router = express.Router();

// register company
router.post('/register',upload.single('image'), registerCompany);

// login company
router.post('/login', loginCompany);

// get company data 
router.get('/company', getCompanyData);

// post a new job
router.post('/post-job', postJob);

// get company job applicants
router.get('/applicants', getCompanyJobApplicants);


// get company  posted jobs
router.get('/list-job', getCompanyPostedJob);

// change job application status 
router.put('/change-status', changeJobApplicationStatus);

// change job visibility
router.post('/change-visibility', changeVisibility);

export default router;