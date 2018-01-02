import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route component={NotFound} />
  </Switch>
);
