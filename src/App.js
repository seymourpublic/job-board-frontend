// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import JobListPage from './components/JobListPage'; // Import the JobListPage component
import JobDetails from './components/JobDetails';
import JobForm from './components/JobForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobListPage />} /> {/* Add the JobListPage route */}
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/create" element={<JobForm />} />
        <Route path="/edit/:id" element={<JobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
