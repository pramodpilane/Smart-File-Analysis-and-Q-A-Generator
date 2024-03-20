// Icons Component.js

import React from 'react';
import {IconButton}  from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";

const DeleteIconButton = ({ action }) => {
  return (
    <IconButton
    color="error"
    size="large"
    edge="end"
    aria-label="delete"
    onClick={action}
  >
    <DeleteIcon />
  </IconButton>
  );
};

export default DeleteIconButton;
