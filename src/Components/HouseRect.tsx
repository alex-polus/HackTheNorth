import { Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";
import "./HouseRect.css";

function HouseRect() {
  return (
    <Box
      style={{
        width: "80%",
        height: 207,

        borderRadius: "8px",
        boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <h4>Condos in harbourfront are currently</h4>
          <h1>3230 230203</h1>
          <p>based on average price of current listings</p>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}

export default HouseRect;
