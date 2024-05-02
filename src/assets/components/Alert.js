import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";

const CustomAlert = ({ severe, msg, setConfirmation }) => {
  const [showAlert, setShowAlert] = useState(true); // State to manage alert visibility

  useEffect(() => {
    // Close the alert after 4 seconds
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 4000); 

    // Clear the timeout when component unmounts
    return () => clearTimeout(timer); 
  }, []);

  // Handler for confirmation button click
  const handleConfirmationClick = (choice) => {
    setShowAlert(false); // Close the alert
    // If there's a callback for confirmation, call it
    if (setConfirmation) {
      setConfirmation(choice);
    }
  };

  return (
    <Stack
      sx={{ width: "100%", paddingTop: "0px", position: "fixed", top: 70 }}
      spacing={2}
    >
      {/* Render alert based on severity */}
      {severe === "warning" ? (
        // Collapse effect for warning alerts
        <Collapse in={showAlert} timeout={3000} unmountOnExit>
          {/* Warning alert with action buttons */}
          <Alert
            severity={severe} // Severity level of the alert
            action={ // Action buttons
              <>
                {/* OK button */}
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => handleConfirmationClick("OK")}
                >
                  OK
                </Button>\
                {/* Cancel button */}
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => handleConfirmationClick("Cancel")}
                >
                  Cancel
                </Button>
              </>
            }
          >
            {msg} {/* Alert message */}
          </Alert>
        </Collapse>
      ) : (
        // Collapse effect for non-warning alerts
        <Collapse in={showAlert} timeout={1000} unmountOnExit>
          {/* Alert without action buttons */}
          <Alert severity={severe}>{msg}</Alert>
        </Collapse>
      )}
    </Stack>
  );
};


export default CustomAlert;
