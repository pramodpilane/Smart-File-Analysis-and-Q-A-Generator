import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomTypography from "../assets/components/Typography"; // Import CustomTypography component
import { Box } from "@mui/material";

export default function QuizResult() {
  const { state } = useLocation(); // Get state from the location object
  const { attempted, scored, total } = state; // Destructure state into variables
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      {/* Display success message */}
      <Box>
        <CustomTypography
          variant="h6"
          text={"Quiz has been submitted successfully"}
        />
      </Box>
      <br />

      {/* Display attempted questions count if not all questions were attempted */}
      {attempted != total && (
        <>
          <Box>
            <CustomTypography
              variant="h6"
              text={`You have attempted ${attempted} questions`}
            />
          </Box>
          <br />
        </>
      )}

      {/* Display score */}
      <Box>
        <CustomTypography
          variant="h4"
          text={`You have scored ${scored}/${total}`}
        />
      </Box>

      {/* Link to go back */}
      <Link
        to={-2}
        style={{
          textDecoration: "none",
          fontSize: "1.2rem",
          backgroundColor: "#1976D2",
          padding: "8px 20px",
          marginTop: "50px",
          color: "white",
          fontWeight: "600",
        }}
      >
        Go Back
      </Link>
    </div>
  );
}
