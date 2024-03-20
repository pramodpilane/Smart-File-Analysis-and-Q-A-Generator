// SubmitButton.js

import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const CustomSubmitButton = styled(Button)(({ theme }) => ({
  maxWidth: "50em",
  minWidth: "40em",
  maxHeight: "7em",
  minHeight: "4em",
  fontSize: "1.5rem", 
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
