import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
    color: '#fff',
  },
  loaderText: {
    marginTop: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    
  },
};

const LoaderPage = ({ size = 60, text }) => {
  return (
    <Box className="loader-container" style={styles.loaderContainer}>
      <CircularProgress size={size} style={{ color: "white" }} thickness={4} />
      <Typography variant="h5" className="loader-text" style={styles.loaderText}>
        Please wait while we generate your {text}
      </Typography>
    </Box>
  );
};

export default LoaderPage;
