import Job from '../models/Job.js';
import JobApplication from '../models/JobApplication.js';
import User from '../models/User.js'
import { v2 as cloudinary } from 'cloudinary';
// get user data
export const getUserData = async (req, res) => {
    const userId = req.auth.userId
    try {
        const user = await User.findById(userId);
        if(!user){
            res.json({success: false, message: "User Not Found"})
        }
        res.json({success: true, user})
    } catch (error) {
        res.json({success: false, message: error.message})
    }

}

// apply for a job
export const applyForJob = async (req, res) => {

    const {jobId} = req.body
    const userId = req.auth.userId
    
    try {
        const isAlreadyApply = await JobApplication.find({jobId, userId});
        if(isAlreadyApply.length > 0){
            return res.json({success: false, message: "Already Applied"})
        }

        const jobData = await Job.findById(jobId);

        if(!jobData){
            return res.json({success: false, message: 'Job Not Fount'});
        }

        await JobApplication.create({
            companyId: jobData.companyId,
            userId,
            jobId,
            date: Date.now()
        });
        
        res.json({success: true, message: "Applied Successfully"})
    } catch (error) {
        res.json({success: false, message: error.message});
    }

}

// get user applied application
export const getUserJobApplications = async (req, res) => {
    try {
        
        const userId = req.auth.userId
        const application = await Job.find({userId}).populate('companyId','name, email, image').populate('jobId', 'title, description location category level salary').exec()

        if(!application){
            return res.json({success: false, message: "No job application form for this user."})
        }

        return res.json({success: true, application})

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

//update user profile
export const updateUserResume = async (req, res) => {
    try {
        const userId = req.auth.userId

        const resumeFile = req.resumeFile

        const userData = await User.findById(userId);

        if(resumeFile){
            const resumeUpload = await cloudinary.uploader.upload(resumeFile.path);
            userData.resume = resumeUpload.secure_url
        }

        await userData.save();

        res.json({success: true, message: "Resume Updated"});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

