const mongoose = require("mongoose");
const fs = require("fs");
const connectDB = require("./config/db");
const Data = require("./models/dataModel");

// Connect to DB
connectDB();

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync("jsondata.json", "utf-8"));

// Insert Data into MongoDB
const importData = async () => {
  try {
    await Data.deleteMany(); // Clear existing data
    await Data.insertMany(jsonData); // Insert new data
    console.log("Data Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

// Run function
importData();
