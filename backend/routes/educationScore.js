const express = require("express");
const router = express.Router();
// const axios = require("axios");
// require("dotenv/config");

// endpoint example: /educationScore?lat=43.464256&lon=-80.520409
// params
// lat for latitude
// lon for longitude
router.get("/", (req, res) => {
  // gets params from url if we find an api for them
  lat = req.query["lat"];
  lon = req.query["lon"];
  // debugging:
  // console.log("latitude: ", req.query["lat"])
  // console.log("longitude: ", req.query["lon"])

  // returns a random number between 60 and 100
  return_json = {
    score: Math.floor(Math.random() * (100 - 60) + 60),
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(return_json));
});

module.exports = router;
