import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Navbar from './Navbar'; // Import the Navbar component
import JobList from './JobList'; // Import the JobList component
import heroImage from './resources/img/hero.jpg'

function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return 'Good morning!';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
}

function LandingPage() {
  const cardMediaStyle = {
    width: '100%', // Set the width to 100% to cover the entire container width
    borderRadius: '0px',
  };
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div>
        <CardMedia
            component="img"
            alt="Job Portal Image"
            height="300"
            image={heroImage} // Use the imported variable here
            sx={cardMediaStyle}
          />
        <Container maxWidth="100%" sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
            {getGreeting()} Welcome to Career Spotlight
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: '#666' }}>
            Find your dream job with us.
          </Typography>

        </Container>
        
      </div>
      <Container maxWidth="100%" sx={{ textAlign: 'center', mt: 4 }}>
        <JobList /> {/* Display the list of jobs */}
      </Container>
    </div>
  );
}

export default LandingPage;
