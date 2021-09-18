import TextField from "@mui/material/TextField/TextField";
import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <TextField
      className="searchBar"
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      color="primary"
    />
  );
}

export default SearchBar;
