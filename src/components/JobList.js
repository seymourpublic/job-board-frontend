import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings from your API
    axios.get('http://localhost:3000/jobs')
      .then((response) => {
        setJobListings(response.data); // Update the state with job listings data
      })
      .catch((error) => {
        console.error('Error fetching job listings:', error);
      });
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobListings.map((job) => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.description}</p>
            <p>Closing Date: {new Date(job.closingDate).toLocaleDateString()}</p>
            <p>Email: {job.emailAddress}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

