import { Grid } from "@mui/material";
import React from "react";
import HouseRect from "../Components/HouseRect";
import Navbar from "../Components/Navbar";

export default function House() {
  return (
    <>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <HouseRect />
      </Grid>
    </>
  );
}
