const express = require("express");
const router = express.Router();
// const axios = require("axios");
// require("dotenv/config");

// endpoint example: /housingCost?lat=43.464256&lon=-80.520409&type=detached&prebuilt=yes
// params
// lat for latitude
// lon for longitude
// type : can be condominium, townhouse, semidetached, detached
// prebuilt: yes for prebuilt ; no for pre construction
router.get("/", (req, res) => {
  // gets params from url if we find an api for them
  lat = req.query["lat"];
  lon = req.query["lon"];
  type = req.query["type"];
  prebuilt = req.query["prebuilt"];
  // debugging:
  // console.log("latitude: ", req.query["lat"])
  // console.log("longitude: ", req.query["lon"])

  // returns a random number between 700'000 and 1'200'000
  return_json = {
    price: Math.floor((Math.random() * (12 - 7) + 7)*100000),
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(return_json));
});

module.exports = router;
