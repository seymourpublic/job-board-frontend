// JobListPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Container, Toolbar, Typography, InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import JobCard from './JobCard';


function JobListPage() {
    const [jobListings, setJobListings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobListings, setFilteredJobListings] = useState([]);
  
    useEffect(() => {
      // Fetch all job listings
      axios
        .get('/api/job-listings') // Use the appropriate API endpoint
        .then((response) => {
          setJobListings(response.data);
          setFilteredJobListings(response.data);
        })
        .catch((error) => {
          console.error('Error fetching job listings:', error);
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Listings
          </Typography>
          <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search jobs..."
              inputProps={{ 'aria-label': 'search jobs' }}
              value={searchTerm}
              onChange={handleSearch}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" component="div" mt={3}>
          Job Listings
        </Typography>
        <div className="job-list">
          {filteredJobListings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default JobListPage;
