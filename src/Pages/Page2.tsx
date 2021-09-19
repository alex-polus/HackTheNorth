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
  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={height}
      >
        <Grid item>
          <h2 style={{ textAlign: "center" }}>
            Pre-built, or pre-construction?
          </h2>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Grid item marginTop={5}>
            <BoxCard
              marginTop={10}
              imgName={pre_built}
              imgWidth={175}
              imgHeight={89}
              titleCard={"Pre-Built"}
              titleDesc={"I want a home that's already been built"}
            />
          </Grid>
          <Grid item>
            <BoxCard
              marginTop={0}
              imgName={pre_construct}
              imgWidth={162}
              imgHeight={101}
              titleCard={"Pre-Construction"}
              titleDesc={"I'm looking for a pre-construction"}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page2;
