// src/components/JobListPage.js

import React, { useState, useEffect } from 'react';
import JobCard from './JobCard'; // Create a JobCard component to display individual job listings

function JobListPage() {
  const [jobListings, setJobListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobListings, setFilteredJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings from the API (replace with your actual API endpoint)
    fetch('/api/job-listings')
      .then((response) => response.json())
      .then((data) => {
        setJobListings(data);
        setFilteredJobListings(data);
      });
  }, []);

  useEffect(() => {
    // Filter job listings based on the search term
    const filtered = jobListings.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobListings(filtered);
  }, [searchTerm, jobListings]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <nav>
          {/* Add navigation links */}
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/create">Create Job</a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>

      <div>
        <h1>Job Listings</h1>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="job-list">
        {filteredJobListings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobListPage;
