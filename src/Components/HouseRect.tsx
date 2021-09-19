import { Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Doughnut } from "react-chartjs-2";

import React from "react";
import "./HouseRect.css";
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
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
        <Grid item md={2}>
          <h4>Condos in harbourfront are currently</h4>
          <h1>3230 230203</h1>
          <p>based on average price of current listings</p>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item md={9} justifyContent="space-evenly">
          <Box style={{ width: 180, height: 180 }}>
            <Doughnut data={data} />
          </Box>
          <Box style={{ width: 50, height: 50 }}>
            <Doughnut data={data} />
          </Box>
          <Box style={{ width: 50, height: 50 }}>
            <Doughnut data={data} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HouseRect;
