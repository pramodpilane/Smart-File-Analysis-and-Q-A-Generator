import React, { useState} from "react";
import { Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import Link from '@mui/joy/Link';

// Styled component for a custom submit button
const CustomSubmitButton = styled(Button)(({ theme }) => ({
  maxWidth: "40em",
  minWidth: "20em",
  maxHeight: "4em",
  minHeight: "2em",
  fontSize: "1.5rem",
  fontWeight: "700",
  marginTop: "3em",
}));

// Styles for the loader box
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

// SubmitButton component definition
const SubmitButton = ({ size, variant, onClick, children }) => {
  const [loading, setLoading] = useState(false); // State to track loading status
 
  // Function to handle button click
  const handleClick = async () => {
    setLoading(true); // Set loading state to true
    // Perform any asynchronous tasks (e.g., uploading file)
    await onClick(); // Assuming onClick returns a promise
    setLoading(false); // Set loading state to false after task completion
  };

  return (
    <>
      {loading ? (
        // Render loader box while loading
        <Link  style = {styles.loaderBox} variant="plain"
        startDecorator={<CircularProgress style={{ color: "white" }} size={24} />}
        sx={{ p: 1 }}>
          <span>Uploading Files...</span>
          <span></span>
        </Link> 
      ) : (
        // Render custom submit button when not loading
        <CustomSubmitButton
          size={size}
          variant={variant}
          onClick={handleClick}
          disabled={loading}
        >
          
            {children} {/* Render children inside the button */}
          
        </CustomSubmitButton>
      )}
    </>
  );
};

// Export the SubmitButton component
export default SubmitButton;
