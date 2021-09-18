import { Box, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import Background from "../Components/Background";
import BoxCard from "../Components/BoxCard";
import SearchBar from "../Components/SearchBar";

let height = {
  height: 550,
};
const image1 =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/firstpic.png";
const image2 =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/secondpic.png";
const image3 =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/thirdpic.png";
function Home() {
  return (
    <div>
      <Background />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={height}
      >
        <Grid item md={2} width="1000px">
          <h1 style={{ textAlign: "right" }}>Where is home?</h1>
        </Grid>
        <Grid item width="1000px">
          <SearchBar />
        </Grid>
      </Grid>
      <Grid
        marginTop="200px"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={2}>
          <h1 style={{ margin: 0 }}>
            Because everybody should be able to afford a home
          </h1>
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
              imgName={image1}
              imgWidth={245}
              imgHeight={181}
              titleCard={"Track market patterns"}
              titleDesc={
                "We keep track of housing prices for condos, houses, and preconstructions"
              }
            />
            <BoxCard
              imgName={image2}
              imgWidth={263}
              imgHeight={126}
              titleCard={"Tailored to you"}
              titleDesc={
                "Input what type of accomodation you are looking for and where you want to live, we will handle the rest"
              }
            />
            <BoxCard
              imgName={image3}
              imgWidth={170}
              imgHeight={140}
              titleCard={"All in one place"}
              titleDesc={
                "Besides the average price of homes in an area, we track safety, walking scores, nearby ammenities, and more."
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
