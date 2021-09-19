import TextField from "@mui/material/TextField/TextField";
import React from "react";
import "./SearchBar.css";

function SearchBar() {

  function handleSubmit() {
    // event.preventDefault();
    console.log("hi")
    
    // You should see email and password in console.
    // ..code to submit form to backend here...

  }


  return (
    <form onSubmit={handleSubmit} >
      <TextField
        className="searchBar"
        id="outlined-basic"
        label="Enter an address, neighbourhood, city or ZIP code."
        variant="outlined"
        color="primary"
      />
    </form>
  );
}

export default SearchBar;
