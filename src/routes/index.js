import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Portfolio" exact component={Portfolio} />
      <Route path="/About" exact component={About} />
    </Switch>
  </BrowserRouter>
);
