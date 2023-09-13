// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import JobForm from './components/JobForm';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={JobList} />
        <Route path="/jobs/:id" component={JobDetails} />
        <Route path="/create" component={JobForm} />
        <Route path="/edit/:id" component={JobForm} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
