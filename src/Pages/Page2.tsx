import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Grid, Paper } from "@mui/material";
import BoxCard from "../Components/BoxCard";

let height = {
  height: 550,
};
const pre_built =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/prebuilt.png";
const pre_construct =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/preconstruct.png";

function Page2() {
  return (<div>
    <Navbar />
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={height}
    >

      <Grid item width="60%">
        <h2 style={{ textAlign: "center" }}>Pre-built, or pre-construction?</h2>
      </Grid>
      <Grid item width="60%">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="baseline"
          spacing={0}
        >
          <BoxCard
            imgName={pre_built}
            imgWidth={175}
            imgHeight={89}
            
            titleCard={"Pre-Built"}
            titleDesc={
              "I want a home that's already been built"
            }
          />
          <BoxCard
            imgName={pre_construct}
            imgWidth={162}
            imgHeight={101}
            titleCard={"Pre-Construction"}
            titleDesc={
              "I'm looking for a pre-construction"
            }
          />

        </Grid>
      </Grid>
    </Grid>
  </div>);
}

export default Page2;
