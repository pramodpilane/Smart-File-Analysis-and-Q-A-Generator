// TypographyComponent.js

import React from 'react';
import Typography from '@mui/material/Typography';

const CustomTypography = ({ text, variant, style }) => {
  return (
    <Typography variant={variant} component="h2" style={style}>
      <strong>{text}</strong>
    </Typography>
  );
};

export default CustomTypography;
