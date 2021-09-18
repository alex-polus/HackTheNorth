import { Box } from "@mui/material";
import React from "react";
import "./Background.css";

const backgroundImage =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/backgroundpic.png";

const featherImage =
  "https://raw.githubusercontent.com/alex-polus/HackTheNorth/client-web/src/img/feather.png";

function Background() {
  return (
    <Box className="box-background">
      <img src={backgroundImage} width="70%" />
      <img src={featherImage} style={{ width: 58, height: 150 }} />
    </Box>
  );
}

export default Background;
