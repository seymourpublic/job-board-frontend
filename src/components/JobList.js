// src/components/JobList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from your API
    axios.get('http://localhost:3000/jobs')
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job listings:', error);
      });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <a href={`/jobs/${job._id}`}>{job.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
