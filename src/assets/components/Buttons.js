// SubmitButton.js

import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import Link from '@mui/joy/Link';


const CustomSubmitButton = styled(Button)(({ theme }) => ({
  maxWidth: "40em",
  minWidth: "20em",
  maxHeight: "4em",
  minHeight: "2em",
  fontSize: "1.5rem",
  fontWeight: "700",
  marginTop: "3em",
}));

const styles = {
  loaderBox: {
    maxWidth: "40em",
    minWidth: "20em",
    maxHeight: "4em",
    minHeight: "2em",
    fontSize: "1.5rem",
    fontWeight: "400",
    marginTop: "3em",
    backgroundColor: "#1976D2",
    color: "white", 
    display: "flex",
    justifyContent: "space-evenly",
    opacity: 0.8,
    cursor: "default",
    textDecoration: "none"
  }
}

const SubmitButton = ({ size, variant, onClick, children }) => {
  const [loading, setLoading] = useState(false);
 


  const handleClick = async () => {
    setLoading(true);
    // Perform any asynchronous tasks (e.g., uploading file)
    await onClick(); // Assuming onClick returns a promise
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Link  style = {styles.loaderBox} variant="plain"
        startDecorator={<CircularProgress style={{ color: "white" }} size={24} />}
        sx={{ p: 1 }}>
          <span>Uploading Files...</span>
          <span></span>
        </Link>
        
      ) : (
        
        <CustomSubmitButton
          size={size}
          variant={variant}
          onClick={handleClick}
          disabled={loading}
        >
          
            {children}
          
        </CustomSubmitButton>
      )}
    </>
  );
};

export default SubmitButton;
