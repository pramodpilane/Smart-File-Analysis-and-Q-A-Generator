// SubmitButton.js

import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const CustomSubmitButton = styled(Button)(({ theme }) => ({
  maxWidth: "40em",
  minWidth: "20em",
  maxHeight: "4em",
  minHeight: "2em",
  fontSize: "1.5rem", 
  fontWeight: "700",
  marginTop: "3em",
}));

const SubmitButton = ({ size, variant, onClick, children }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    // Perform any asynchronous tasks (e.g., uploading file)
    await onClick(); // Assuming onClick returns a promise
    setLoading(false);
  };

  return (
    <CustomSubmitButton
      size={size}
      variant={variant}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <CircularProgress color="primary" size={24} /> : children}
    </CustomSubmitButton>
  );
};

export default SubmitButton;
