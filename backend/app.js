const express = require("express");
const app = express();
require("dotenv/config");

// to get apikey :
// console.log(process.env.GOOGLE_MAPS_API_KEY);

//import routes
const walkScoreRoute = require("./routes/walkScore");
const safetyScoreRoute = require("./routes/safetyScore");
const educationScoreRoute = require("./routes/educationScore");
const housingCostRoute = require("./routes/housingCost");

// redirects to appropriate route for
app.use("/walkScore", walkScoreRoute);
app.use("/safetyScore", safetyScoreRoute);
app.use("/educationScore", educationScoreRoute);
app.use("/housingCost", housingCostRoute);

// routes
app.get("/", (req, res) => {
  res.send("testing success - API works");
});

app.listen(3001);
