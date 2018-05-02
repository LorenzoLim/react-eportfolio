import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Contact" exact component={Home} />
      <Route path="/Portfolio" exact component={Home} />
      <Route path="/About" exact component={Home} />
    </Switch>
  </BrowserRouter>
);
