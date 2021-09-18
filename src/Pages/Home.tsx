import { Box, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import Background from "../Components/Background";
import BoxCard from "../Components/BoxCard";
import SearchBar from "../Components/SearchBar";

let height = {
  height: 550,
};

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
        <Grid item md={2}>
          <h1 style={{ margin: 0, color: "white" }}>Where is home?</h1>
        </Grid>
        <Grid item width="500px">
          <SearchBar />
        </Grid>
      </Grid>
      <Grid
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
        <Grid item width="500px">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <BoxCard />
            <BoxCard />
            <BoxCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
