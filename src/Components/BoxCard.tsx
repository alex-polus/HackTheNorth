import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function BoxCard(imgName: string) {
  return (
    <Box width="293px" height="296px">
      <Grid>
        <img src={imgName} alt="Logo" width="245px" height="181px" />
        <h1>title</h1>
      </Grid>
    </Box>
  );
}

export default BoxCard;
