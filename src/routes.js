import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Base from './components/Base';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Base} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={ProjectList} />
  </Switch>
);

export default Routes;
