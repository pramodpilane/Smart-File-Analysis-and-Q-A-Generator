import React from 'react'
import { Link, useLocation } from "react-router-dom";
import CustomTypography from '../assets/components/Typography';
import { Box } from '@mui/material';

export default function QuizResult() {
    const {state} = useLocation();
    const { scored, total } = state;
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <Box >
      <CustomTypography variant="h6" text={"Quiz has been submitted successfully"}/>
      </Box><br/>
      <Box>
      <CustomTypography variant="h4" text={`You have scored ${scored}/${total}`}/>
      </Box>
      
      <Link to={-2} style={{textDecoration:"none", fontSize: "1.2rem", backgroundColor: "#1976D2", padding: "8px 20px", marginTop: "50px", color: "white", fontWeight: "600"}}>Go Back</Link>
    </div>
  )
}
