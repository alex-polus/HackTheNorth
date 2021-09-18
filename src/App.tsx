import React from "react";
import { Route, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/" component={About} />
    </BrowserRouter>
  );
}

export default App;
