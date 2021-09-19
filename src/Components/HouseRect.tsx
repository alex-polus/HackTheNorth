import { Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Doughnut } from "react-chartjs-2";

import React from "react";
import "./HouseRect.css";
const data = {
  labels: ["Walking Score of 80"],
  datasets: [
    {
      label: "Walking Score",
      data: [80, 20],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "white"],
      borderColor: ["rgba(255, 99, 132, 1)", "white"],
      borderWidth: 1,
    },
  ],
};
const data2 = {
  labels: ["Safety Rating of 60"],
  datasets: [
    {
      label: "# of Votes",
      data: [60, 40],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "white"],
      borderColor: ["rgba(54, 162, 235, 1)", "white"],
      borderWidth: 1,
    },
  ],
};
const data3 = {
  labels: ["Education Score of 90"],
  datasets: [
    {
      label: "# of Votes",
      data: [90, 10],
      backgroundColor: ["rgba(255, 206, 86, 0.2)", "white"],
      borderColor: ["rgba(255, 206, 86, 1)", "white"],
      borderWidth: 1,
    },
  ],
};
function HouseRect() {
  return (
    <Box
      style={{
        width: "78%",
        height: 207,

        borderRadius: "8px",
        boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
        marginBottom: 50,
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
        <Divider orientation="vertical" flexItem style={{ height: 207 }} />
        <Grid container item md={8} justifyContent="space-evenly">
          <Box style={{ width: 180, height: 180 }}>
            <Doughnut data={data} />
          </Box>
          <Box style={{ width: 180, height: 180 }}>
            <Doughnut data={data2} />
          </Box>
          <Box style={{ width: 180, height: 180 }}>
            <Doughnut data={data3} />
          </Box>
          <Box style={{ textAlign: "center" }}>
            <h3>$500 500</h3>
            <h2>Average Household Income</h2>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HouseRect;
