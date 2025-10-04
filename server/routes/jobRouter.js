import express from "express";
import { getJobById, getJobs } from "../controllers/jobController.js";

const router = express.Router();

//Route to get all company
router.get('/', getJobs);

//Route to get one company by ID
router.get('/:id', getJobById);

export default router