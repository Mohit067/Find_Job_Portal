import express from "express";
import cors from 'cors'

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api working")
})


// Port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`)
})