const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv/config");


// endpoint example: /walkScore?lat=43.464256&lon=-80.520409
// params
// lat for latitude
// lon for longitude
router.get("/", (req, res) => {
  // gets params from url
  lat = req.query["lat"];
  lon = req.query["lon"];
  // debugging:
  // console.log("latitude: ", req.query["lat"])
  // console.log("longitude: ", req.query["lon"])

  // assembles get request
  axios
    .get("https://api.walkscore.com/score", {
      params: {
        format: "json",
        lat,
        lon,
        wsapikey: "d1133028967b4bdc853be9dd5a631d9c",
      },
    })
    .then(async (response) => {
      // awaits response then sends back the appropriate data to user
      let return_json = await {
        score: response["data"]["walkscore"],
        message: response["data"]["description"],
      };
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(return_json));
    })
    .catch((err) => {
      // catch error
      console.log(err);
      res.status(404).send("Error, something went wrong: " + err.message);
    });
});

module.exports = router;
