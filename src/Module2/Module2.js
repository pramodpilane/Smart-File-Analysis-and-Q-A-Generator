import React, { useState, useEffect } from "react";
import logo1 from "../assets/images/OIG4.jpeg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import CustomAlert from "../assets/components/Alert";
import { useNavigate } from "react-router-dom";
import CustomTypography from "../assets/components/Typography";
import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

const Module2 = () => {
  // State variables for the input field and error handling
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sugesstionLoading, setSuggestionLoading] = useState(false);
  const [suggestion, setSuggestion] = React.useState();
  const navigate = useNavigate();

  async function fetchSuggestionData() {
    try {
      handleSuggestionLoader();
      const response = await fetch("http://localhost:8000/suggest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSuggestion(data.suggestion);
      setSuggestionLoading(false);
    } catch (error) {
      console.error("Error fetching suggestion:", error);
    }
  }

  useEffect(() => {
    console.log("suggestion effect");
    fetchSuggestionData();
  }, []);

 

  // Theme for the light mode
  const lightTheme = createTheme({ palette: { mode: "light" } });

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
    }
  };

  const handleSuggestionLoader = () => {
    if (!sugesstionLoading) {
      setSuggestionLoading(true);
    }
  };

  // Styles for the container
  

  const styles = {
    container:{
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "70px",
      paddingBottom: "70px"
    },
    shimmer: {
      width: "90%",
      margin: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    suggestion: {
      height: "100px",
      padding: "20px",
      position: "relative",
      transition: "transform 0.2s ease, box-shadow 0.2s ease", // Add transition for smooth hover effect
      "&:hover": {
        transform: "translateY(-5px)", // Move the paper slightly upwards on hover
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add subtle elevation on hover
        cursor: "pointer", // Change cursor to pointer on hover
      },
    },
    buttonContainer: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
    },

    suggestionButton: {
      minHeight: "10px",
      color: "white",
      bgcolor: "white",
      padding: "5",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
        bgcolor: "white",
      },
    },
  };

  async function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  // Function to handle submission of question
  const submitQuestion = async () => {
    if (!question.trim()) {
      setError("please enter a question before proceeding");
      await delay(6000);
      setError("");
    } else {
      handleButtonClick();
      const response = await fetch("http://localhost:8000/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setLoading(false);
      setAnswer(data.answer);
    }
  };

  const handleDescriptionClick = async () => {
    const q = `Describe about ${suggestion}`;
    setQuestion(q);
    handleButtonClick();
    const response = await fetch("http://localhost:8000/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: q }),
    });

    const data = await response.json();
    setLoading(false);
    setAnswer(data.answer);
  };

  const handleKeyClick = async () => {
    setQuestion("KEYWORDS & KEYPOINTS");
    handleButtonClick();
    const response = await fetch("http://localhost:8000/keypw", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setLoading(false);
    setAnswer(data.keyPW);
  };

  const generateQA = async () => {
   
    navigate(`/prompt/faq`);
  };

  const generateQuiz = async () => {

    navigate(`/prompt/quiz`);
  };

  const hasAns = answer && answer.length > 0;

  // Replace line breaks with <br> tags, add extra line break before "KEY POINTS", and **KEYWORDS** with bolded text
  const formattedAnswer = answer.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line.includes("KEY POINTS") && <br />}{" "}
      {/* Add extra line break before "KEY POINTS" */}
      <span
        dangerouslySetInnerHTML={{
          __html: line.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
        }}
      />
      <br />
    </React.Fragment>
  ));

  return (
    <div style={styles.container}>
      {/* Display error if input field is empty & submit button is clicked */}
      {error && <CustomAlert severe="error" msg={`ERROR: ${error}`} />}
      
        
          <Box />
          <img
            src={logo1}
            alt="logo"
            style={{ height: "200px", width: "200px", cursor: "pointer" }}
          />
       
      

      {/* Header */}
      <CustomTypography
        variant="H1"
        text={"HOW CAN I HELP YOU TODAY?"}
        style={{ fontSize: "2rem", margin: "10px 0" }}
      />
      <br />

      <Grid container display="flex" justifyContent="center" spacing={2}>
        <Grid item xs={9}>
          {/* Theme provider for light mode */}
          <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr", // Changed to one row and four columns
                gap: 4, // Adjusted gap to ensure proper spacing
                alignItems: "start", // Align items at the start of the cross axis
                position: "relative", // Ensure the container has relative positioning
              }}
            >
              <Paper
                elevation={10}
                onClick={generateQuiz}
                sx={styles.suggestion}
              >
                <b>Develop a Personalized Quiz</b>
                <Box sx={styles.buttonContainer}>
                  <Button
                    variant="contained"
                    sx={styles.suggestionButton}
                    onClick={submitQuestion}
                  >
                    <SendIcon fontSize="medium" padding="0" color="primary" />
                  </Button>
                </Box>
              </Paper>
              <Paper elevation={10} onClick={generateQA} sx={styles.suggestion}>
                <b>Questions & Answers</b>
                <Box sx={styles.buttonContainer}>
                  <Button
                    variant="contained"
                    sx={styles.suggestionButton}
                    onClick={submitQuestion}
                  >
                    <SendIcon fontSize="medium" padding="0" color="primary" />
                  </Button>
                </Box>
              </Paper>
              <Paper
                elevation={10}
                onClick={handleDescriptionClick}
                sx={styles.suggestion}
              >
                {suggestion === undefined && sugesstionLoading && (
                  <ShimmerTitle
                    line={1}
                    variant="primary"
                    className={styles.shimmer}
                    style={{
                      position: "absolute",
                      marginLeft: "-50%",
                      marginTop: "-50%",
                    }}
                  />
                )}
                {suggestion !== undefined && (
                  <b
                    style={{ textTransform: "initial" }}
                  >{`Describe about "${suggestion}"`}</b>
                )}
                <Box sx={styles.buttonContainer}>
                  <Button
                    variant="contained"
                    sx={styles.suggestionButton}
                    onClick={submitQuestion}
                  >
                    <SendIcon fontSize="medium" padding="0" color="primary" />
                  </Button>
                </Box>
              </Paper>
              <Paper
                elevation={10}
                onClick={handleKeyClick}
                sx={styles.suggestion}
              >
                <b>Generate Keywords and Keypoints</b>

                <Box sx={styles.buttonContainer}>
                  <Button
                    variant="contained"
                    sx={styles.suggestionButton}
                    onClick={submitQuestion}
                  >
                    <SendIcon fontSize="medium" padding="0" color="primary" />
                  </Button>
                </Box>
              </Paper>
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>

      <br />
      <br />
      <br />

      {/* Input field for user prompt */}
      <Grid
        sx={{
          minWidth: "80%",
          maxWidth: "90%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          placeholder="ASK A QUESTION..."
          fullWidth
          id="fullWidth"
          focused
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            setError("");
          }}
        />
        {/* Button to submit question */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ position: "relative" }}>
            <Button
              variant="contained"
              sx={{ minHeight: "54px" }}
              onClick={submitQuestion}
            >
              {!loading && <SendIcon />}
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: blue[50],
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        </Box>
      </Grid>
      <br />

      <Grid
        sx={{
          width: 1500,
          maxWidth: "80%",
          margin: 1,
          marginBottom: "auto",
        }}
      >
        {loading ? (
          <div style={{}}>
            <ShimmerThumbnail height={250} rounded />
          </div>
        ) : (
          hasAns && (
            <Box
              sx={{
                padding: "15px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                border: "1px solid lightgrey", // Border style
                whiteSpace: "pre-line",
              }}
            >
              {formattedAnswer}
            </Box>
          )
        )}
      </Grid>
    </div>
  );
};

export default Module2;
