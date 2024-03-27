import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress />
      <Typography variant="body1" mt={2}>
        Please wait patiently while we generate your quiz.
      </Typography>
    </Box>
  );
};

const DisplayLoader = () => {
    console.log("i reached here")
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Loader />
    </Box>
  );
};

export default DisplayLoader;
