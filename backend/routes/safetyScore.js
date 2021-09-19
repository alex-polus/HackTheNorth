const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv/config");
var Amadeus = require("amadeus");

var amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API,
  clientSecret: process.env.AMADEUS_SECRET,
});

// endpoint example: /safetyScore?lat=43.464256&lon=-80.520409
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

  // uses amadeus's library to get safety of a location, if it can't find it then it return a random int between 60 and 100
  amadeus.safety.safetyRatedLocations
    .get({
      latitude: lat,
      longitude: lon,
    })
    .then(async (resp) => {
      if (!resp["data"]) {
        return_json = {
          score: Math.floor(Math.random() * (100 - 60) + 60),
        };
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(return_json));
      } else {
        return_json = await {
          score:
            resp["data"][resp["data"].length - 1]["safetyScores"]["overall"],
        };
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(return_json));
      }
    })
    .catch((err) => {
      // catch error
      console.log(err);
      res.status(404).send("Error: something went wrong: " + err.message);
    });
});

module.exports = router;
