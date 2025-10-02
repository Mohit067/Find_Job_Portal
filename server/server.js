import './config/instrument.js'
import express from "express";
import cors from 'cors'
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.js';

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
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


app.post('/webhooks/', clerkWebhooks)

// Port
const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app)
app.listen(PORT, async () => {
    console.log(`app is running on http://localhost:${PORT}`)
})