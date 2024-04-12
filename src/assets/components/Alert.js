import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";

const CustomAlert = ({ severe, msg, setConfirmation }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 4000); // Close the alert after 4 seconds

    return () => clearTimeout(timer); // Clear the timeout when component unmounts
  }, []);

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
      {severe === "warning" ? (
        <Collapse in={showAlert} timeout={3000} unmountOnExit>
          <Alert
            severity={severe}
            action={
              <>
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => handleConfirmationClick("OK")}
                >
                  OK
                </Button>
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
            {msg}
          </Alert>
        </Collapse>
      ) : (
        <Collapse in={showAlert} timeout={1000} unmountOnExit>
          <Alert severity={severe}>{msg}</Alert>
        </Collapse>
      )}
    </Stack>
  );
};


export default CustomAlert;
