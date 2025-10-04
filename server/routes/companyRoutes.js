import express from "express";
import { changeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJob, loginCompany, postJob, registerCompany } from "../controllers/companyController.js";
import upload from "../config/multer.js";
import { protectCompany } from "../middleware/authMiddleware.js";

const router = express.Router();

// register company
router.post('/register',upload.single('image'), registerCompany);

// login company
router.post('/login', loginCompany);

// get company data 
router.get('/company', protectCompany, getCompanyData);

// post a new job
router.post('/post-job', protectCompany, postJob);

// get company job applicants
router.get('/applicants', protectCompany, getCompanyJobApplicants);


// get company  posted jobs
router.get('/list-job', protectCompany, getCompanyPostedJob);

// change job application status 
router.put('/change-status', protectCompany, changeJobApplicationStatus);

// change job visibility
router.post('/change-visibility', protectCompany, changeVisibility);

export default router