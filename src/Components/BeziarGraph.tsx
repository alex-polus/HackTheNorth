import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";

const image =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/graphthing.png";
export default function BeziarGraph() {
  return (
    <Box style={{ width: 2000 }}>
      <img src={image}></img>
    </Box>
  );
}
