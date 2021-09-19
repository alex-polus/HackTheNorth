import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const BoxCard: React.FC<{
  imgName: string;
  imgWidth: number;
  imgHeight: number;
  titleCard: string;
  titleDesc: string;
}> = ({ imgName, imgWidth, imgHeight, titleCard, titleDesc }) => {
  return (
    <Box width="293px" height="296px" marginX={2} marginTop={4}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <img src={imgName} alt="Logo" width={imgWidth} height={imgHeight} />
        <h4>{titleCard}</h4>
        <p>{titleDesc}</p>
      </Grid>
    </Box>
  );
};

export default BoxCard;
