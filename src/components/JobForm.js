import React, { useState } from 'react';
import axios from 'axios';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import NavBar from './Navbar' // Import the NavBar component

function JobForm() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    logoUrl: '',
    closingDate: '',
    emailAddress: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create the job listing
    axios
      .post(`${apiUrl}/jobs`, formData) // Use the appropriate API endpoint
      .then((response) => {
        console.log('Job listing created:', response.data);
        // Redirect or perform other actions as needed
      })
      .catch((error) => {
        console.error('Error creating job listing:', error);
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
      <NavBar /> {/* Include the NavBar component */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Create Job Listing
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" component="div" mt={3}>
          Create a New Job Listing
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Company"
            variant="outlined"
            fullWidth
            margin="normal"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <TextField
            label="Logo URL"
            variant="outlined"
            fullWidth
            margin="normal"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
          />
          <TextField
            label="Closing Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            name="closingDate"
            value={formData.closingDate}
            onChange={handleChange}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Create Listing
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default JobForm;
