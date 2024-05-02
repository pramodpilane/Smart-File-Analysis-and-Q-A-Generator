import React from 'react';
import Typography from '@mui/material/Typography';

// Define a custom typography component
const CustomTypography = ({ text, variant, style }) => {
  return (
    // Render Typography component from Material-UI
    <Typography variant={variant} component="h2" sx={style}>
      <strong>{text}</strong>
    </Typography>
  );
};

// Export the custom typography component
export default CustomTypography;
