// Uploading Files Button Component.js

import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

const UploadButton = ({ action }) => {
    const styles = {
        button: {
            maxWidth: "50em",
            minWidth: "20em",
            maxHeight: "7em",
            minHeight: "5em",
            fontsize: "8rem",
          },
    };
  return (
    <Button
                component="label"
                role={undefined}
                variant="contained"
                style={styles.button}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                <strong> UPLOAD</strong>
                <VisuallyHiddenInput
                  type="file"
                  multiple
                  accept=".pdf, .docx"
                  onChange={action}
                />
              </Button>
  );
};

export default UploadButton;
