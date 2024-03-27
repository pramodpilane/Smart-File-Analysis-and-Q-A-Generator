// SubmitButton.js

import React, { useState, useEffect } from 'react';
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
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setShowProgress((prevShowProgress) => !prevShowProgress);
      }, 3000);
    } else {
      setShowProgress(true);
    }
    return () => clearInterval(timer);
  }, [loading]);

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
      {loading ? (
        showProgress ? (
          <CircularProgress color="primary" size={24} />
        ) : (
          <span style={{fontSize:"1rem", color: "darkgrey"}}>Please wait...</span>
        )
      ) : (
        children
      )}
    </CustomSubmitButton>
  );
};

export default SubmitButton;
