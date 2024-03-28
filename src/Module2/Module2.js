import React, { useState, useEffect } from "react";
import logo1 from "../assets/images/OIG4.jpeg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CustomAlert from '../assets/components/Alert';
import { useNavigate } from "react-router-dom";
import CustomTypography from "../assets/components/Typography";


const Module2 = () => {
  // State variables for the input field and error handling
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = React.useState();
  const navigate = useNavigate();
  const timer = React.useRef();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/suggest", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        setSuggestion(data.suggestion);
      } catch (error) {
        console.error('Error fetching suggestion:', error);
      }
    }
    fetchData();
  }, []);

  // Styled component for the suggestion items
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 100,
    lineHeight: "100px",
    cursor: "pointer",
  }));

  // Theme for the light mode
  const lightTheme = createTheme({ palette: { mode: "light" } });



  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
    }
  };

  // Styles for the container
  const myStyle = {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "70px",
    
  };

  // Function to handle submission of question
  const submitQuestion = async () => {
    if (!question.trim()) {
      setError("please enter a question before proceeding");
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

  const handleDescriptionClick = async() => {
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
  }

  const handleKeyClick = async() => {
    setQuestion("KEYWORDS & KEYPOINTS");
    handleButtonClick();
    const response = await fetch("http://localhost:8000/keypw", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
    });

    const data = await response.json();
    setLoading(false);
    setAnswer(data.keyPW);
  }

  const generateQA = () => {
    navigate(`/prompt/faq`);
  }

  const 
  generateQuiz = () => {
    navigate(`/prompt/quiz`);
  }

  const hasAns = answer && answer.length > 0;
  return (
    <div style={myStyle}>
      {/* Display error if input field is empty & submit button is clicked */}
      {error && (
        <CustomAlert severe="error" msg={`ERROR: ${error}`} />

      )}
      {!hasAns && (
        <>
          <Box  />
          <img
            src={logo1}
            alt="logo"
            style={{ height: "200px", width: "200px", cursor: "pointer" }}
          />
        </>
      )}

      {/* Header */}
      <CustomTypography variant="H1" text={"HOW CAN I HELP YOU TODAY?"} style={{fontSize: "2rem", margin: "10px 0"}}/><br/>

      {/* {!hasAns && <Box sx={{ p: 9 }} />} */}

      {/* Suggestions grid */}
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
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 8,
              }}
            >
              {/* Suggestions */}

            
              <Item elevation={10} onClick={generateQuiz}>
                  <b style={{textTransform:"uppercase"}}>DEVELOP A QUIZ</b>
              </Item>
              <Item elevation={10} onClick={generateQA}>
                <b style={{textTransform:"uppercase"}}>Question & Answers</b>
              </Item>
              <Item elevation={10} onClick={handleDescriptionClick}>
                <b style={{textTransform:"uppercase"}}>Describe about {suggestion}</b>
              </Item>
              <Item elevation={10} onClick={handleKeyClick}>
                <b style={{textTransform:"uppercase"}}>KEYWORDS & KEYPOINTS</b>
              </Item>
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
          minWidth: "80%" ,
          maxWidth: "90%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          placeholder="ENTER PROMPT"
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="contained"
              sx={{ minHeight: '54px' }}
              onClick={submitQuestion}
            >
              {!loading && <SendIcon />}
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: blue[50],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
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
        {hasAns && (
          <TextField
            minRows={5}
            disabled
            value={answer.trim()}
            fullWidth
            multiline
            id="fullWidth"
          />
        )}
      </Grid>
    </div>
  );
};

export default Module2;
