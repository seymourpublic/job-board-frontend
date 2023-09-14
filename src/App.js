// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import LandingPage from './components/LandingPage'; // Import the landing page component
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import JobForm from './components/JobForm';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<LandingPage />} /> {/* Landing page */}
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/create" element={<JobForm />} />
        <Route path="/edit/:id" element={<JobForm />} />
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </Router>
  );
}

export default App;
