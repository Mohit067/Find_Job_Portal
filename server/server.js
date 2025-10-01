import express from "express";
import cors from 'cors'
import connectDb from "./config/db.js";
import dotenv from "dotenv";

// Initialize Express
const app = express();

dotenv.config();

// connect database 
await connectDb();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api working")
})


// Port
const PORT = process.env.PORT || 5000
app.listen(PORT, async () => {
    console.log(`app is running on http://localhost:${PORT}`)
})