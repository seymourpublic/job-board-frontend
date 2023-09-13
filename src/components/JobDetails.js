// src/components/JobDetails.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch the job listing by ID from your API
    axios.get(`http://localhost:3000/jobs/${id}`)
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job details:', error);
      });
  }, [id]);

  return (
    <div>
      {job ? (
        <div>
          <h1>{job.title}</h1>
          <p>Company: {job.company}</p>
          <p>Description: {job.description}</p>
          <p>Closing Date: {job.closingDate}</p>
          <p>Email Address: {job.emailAddress}</p>
          <Link to={`/edit/${id}`}>Edit</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default JobDetails;
