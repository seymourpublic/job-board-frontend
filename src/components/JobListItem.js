// src/components/JobListItem.js

import React from 'react';

function JobListItem({ job }) {
  const { title, company, description, closingDate, emailAddress } = job;

  const handleApplyClick = () => {
    // Implement logic to send an email here
    const subject = `Application for ${title}`;
    const receiverEmail = emailAddress;
    window.location.href = `mailto:${receiverEmail}?subject=${subject}`;
  };

  return (
    <div className="job-list-item">
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{description}</p>
      <p>Closing Date: {new Date(closingDate).toLocaleDateString()}</p>
      <p>Email: {emailAddress}</p>
      <button onClick={handleApplyClick}>Apply</button>
    </div>
  );
}

export default JobListItem;
