// JobCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function JobCard({ job }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Closing Date: {new Date(job.closingDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {job.emailAddress}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default JobCard;
