// src/components/JobCard.js

import React from 'react';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.companyName}</p>
      {/* Add more job details as needed */}
    </div>
  );
}

export default JobCard;
