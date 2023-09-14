// src/themes.js

import { createTheme } from '@mui/material/styles';

// Light theme
export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Set your primary color
    },
    secondary: {
      main: '#FF5722', // Set your secondary color
    },
    type: 'light', // Use light mode
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Set your primary color
    },
    secondary: {
      main: '#FF5722', // Set your secondary color
    },
    type: 'dark', // Use dark mode
  },
});
