import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const BoxCard: React.FC<{
  imgName: string;
  imgWidth: number;
  imgHeight: number;
  titleCard: string;
  titleDesc: string;
  marginTop?: number;
}> = ({ imgName, imgWidth, imgHeight, titleCard, titleDesc, marginTop }) => {
  return (
    <Box width="320px" height="200px" marginX={2} marginTop={4}>
      <Grid
        container
        direction="column"
        justifyContent="baseline"
        alignItems="center"
      >
        <img src={imgName} alt="Logo" width={imgWidth} height={imgHeight} />
        <h4 style={{ marginTop: marginTop }}>{titleCard}</h4>
        <p>{titleDesc}</p>
      </Grid>
    </Box>
  );
};

export default BoxCard;
