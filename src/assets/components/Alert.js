import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';

const CustomAlert = ({ severe, msg }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000); // Close the alert after 5 seconds

    return () => clearTimeout(timer); // Clear the timeout when component unmounts
  }, []);

  return (
    <Stack sx={{ width: '100%', paddingTop: '0px', position: "fixed", top:70}} spacing={2}>
      <Collapse in={showAlert} timeout={1000} unmountOnExit>
        <Alert severity={severe} >{msg}</Alert>
      </Collapse>
    </Stack>
  );
};

export default CustomAlert;
