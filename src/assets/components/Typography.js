// TypographyComponent.js

import React from 'react';
import Typography from '@mui/material/Typography';

const CustomTypography = ({ text, variant }) => {
  return (
    <Typography variant={variant} component="h2">
      <strong>{text}</strong>
    </Typography>
  );
};

export default CustomTypography;
