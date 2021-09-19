import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Grid, Paper } from "@mui/material";
import BoxCard from "../Components/BoxCard";

let height = {
  height: 550,
};

const house =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/house.png";
const condo =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/condo.png";


function Page3() {
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
        <h2 style={{ textAlign: "center" }}>What kind of place are you looking for?</h2>
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
            imgName={condo}
            imgWidth={201}
            imgHeight={123}

            titleCard={"Condomium"}
            titleDesc={
              ""
            }
          />
          <BoxCard
            imgName={house}
            imgWidth={142}
            imgHeight={110}
            titleCard={"House"}
            titleDesc={
              ""
            }
          />


        </Grid>
      </Grid>
    </Grid>
  </div>);
}

export default Page3;
