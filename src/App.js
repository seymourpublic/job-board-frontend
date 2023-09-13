// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import the landing page component
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import JobForm from './components/JobForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} /> {/* Landing page */}
        <Route path="/jobs/:id" component={JobDetails} />
        <Route path="/create" component={JobForm} />
        <Route path="/edit/:id" component={JobForm} />
        <Route path="/jobs" component={JobList} />
      </Switch>
    </Router>
  );
}

export default App;
