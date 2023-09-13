// src/components/JobForm.js

import React, { useState } from 'react';
import axios from 'axios';

function JobForm() {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    description: '',
    logo: '',
    closingDate: '',
    emailAddress: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST or PUT request to your API to create or update the job listing
    axios.post('http://localhost:3000/jobs', formData)
      .then((response) => {
        console.log('Job listing created/updated:', response.data);
        // Redirect or perform other actions as needed
      })
      .catch((error) => {
        console.error('Error creating/updating job listing:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Create/Edit Job Listing</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for company, title, description, logo, closingDate, and emailAddress */}
        {/* Use input elements and controlled components */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JobForm;
