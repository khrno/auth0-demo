import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

export default () =>
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="Home" component={Home} />
    </Switch>
  </HashRouter>;