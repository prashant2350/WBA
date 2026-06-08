require('dotenv').config(); // <-- This line loads your .env variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Note: Ensure your Consultation.js model file is correctly set up inside the /models folder
const Consultation = require('./models/Consultation');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection using the variable from your .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

// API Route to handle consultation requests
// API Route to handle consultation requests
app.post('/api/consultation', async (req, res) => {
  console.log("1. Request received from frontend:", req.body); // Debugging line
  try {
    const newConsultation = new Consultation(req.body);
    const savedConsultation = await newConsultation.save();
    console.log("2. Successfully saved to MongoDB:", savedConsultation); // Debugging line
    
    res.status(201).json({ message: "Consultation request received successfully." });
  } catch (error) {
    console.error("ERROR saving to MongoDB:", error); // Debugging line
    res.status(500).json({ error: "Failed to process consultation request." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});