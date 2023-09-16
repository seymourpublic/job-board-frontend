// src/components/JobList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobListItem from './JobListItem'; // Import the JobListItem component

function JobList() {
  const [jobListings, setJobListings] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch job listings from your API
    axios.get(`${apiUrl}/jobs`)
      .then((response) => {
        console.log('API Response:', response.data);
        setJobListings(response.data); // Update the state with job listings data
      })
      .catch((error) => {
        console.error('Error fetching job listings:', error);
      });
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobListings.map((job) => (
          <JobListItem key={job._id} job={job} /> /* Use the JobListItem component */
        ))}
      </div>
    </div>
  );
}

export default JobList;