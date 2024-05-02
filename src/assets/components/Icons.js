import React from 'react';
import {IconButton}  from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";

// DeleteIconButton component definition
const DeleteIconButton = ({ action }) => {
  return (
    // Render an icon button
    <IconButton
    color="error"
    size="large"
    edge="end"
    aria-label="delete"
    onClick={action}
  >
    {/* Render the DeleteIcon inside the IconButton */}
    <DeleteIcon />
  </IconButton>
  );
};

// Export the DeleteIconButton component
export default DeleteIconButton;
