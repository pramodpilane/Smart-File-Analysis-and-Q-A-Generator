import React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

// Styled component for a visually hidden input field
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

// UploadButton component definition
const UploadButton = ({ action, isDisabled = false }) => {
  // Inline styles for the button
  const styles = {
    button: {
      maxWidth: "50em",
      minWidth: "20em",
      maxHeight: "7em",
      minHeight: "5em",
    },
  };
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      style={styles.button}
      startIcon={<CloudUploadIcon style={{ height: "30", width: "30" }} />}
    >
      {/* Text content of the button */}
      <strong style={{ fontSize: "1.6rem" }}> UPLOAD</strong>
      {/* Conditionally render the VisuallyHiddenInput based on isDisabled */}
      {isDisabled?
      // VisuallyHiddenInput for disabled state
      <VisuallyHiddenInput
      type="file"
      multiple
      accept=".pdf, .docx"
      onChange={action}
      disabled
    />
      :
      // VisuallyHiddenInput for enabled state
      <VisuallyHiddenInput
        type="file"
        multiple
        accept=".pdf, .docx"
        onChange={action}
      />
      }
      
    </Button>
  );
};

// Export the UploadButton component
export default UploadButton;
