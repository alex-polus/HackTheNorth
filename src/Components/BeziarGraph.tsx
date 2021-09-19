import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";

const image =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/graphthing3.png";
export default function BeziarGraph() {
  return (
    <Box style={{ width: "100%", height: 50 }}>
      <img src={image} style={{ marginLeft: -1100, marginTop: 120 }}></img>
    </Box>
  );
}
