import { Height } from '@mui/icons-material'
import React from 'react'
import { useLocation } from "react-router-dom";

export default function QuizResult() {
    const {state} = useLocation();
    const { scored, total } = state;
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <span>Quiz has been submitted successfully</span><br/>
      <span>You have scored {scored}/{total}</span>
    </div>
  )
}
