import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import House from "./Pages/House";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";



function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/house" exact component={House} />
      <Route path="/type-built" exact component={Page2} />
      <Route path="/type-house" exact component={Page3} />
    </BrowserRouter>
  );
}

export default App;
