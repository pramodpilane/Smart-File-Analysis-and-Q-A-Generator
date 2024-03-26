import React from 'react'
import { useLocation } from "react-router-dom";
import CustomTypography from '../assets/components/Typography';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SubmitButton from '../assets/components/Buttons';

export default function QuizResult() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const { scored, total } = state;
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <Box >
      <CustomTypography variant="h6" text={"Quiz has been submitted successfully"}/>
      </Box><br/>
      <Box>
      <CustomTypography variant="h4" text={`You have scored ${scored}/${total}`}/>
      </Box>
      <span><SubmitButton size="small" variant="contained" text={" Home page "} onClick={() => navigate(-2)} /></span>
    </div>
  )
}
