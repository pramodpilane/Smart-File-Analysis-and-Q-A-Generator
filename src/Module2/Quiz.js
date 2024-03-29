import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../assets/components/Alert";

const styles = {
  root: {
    padding: "16px",
    width: "60%",
  },
  button: {
    pointerEvents: "none",
    boxShadow: "none",
  },
  questionMeta: {
    marginLeft: "10px",
    display: "inline",
  },
  footer: {
    marginTop: "40px",
    textAlign: "right",
  },
};

function Quiz() {
  const [quiz,setQuiz] = useState([]);
  const [current, setCurrent] = useState(0);
  const [counter, UpdateCounter] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [isAnswerSubmitted, setisAnswerSubmitted] = useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/quiz", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
        });
        const data = await response.json();
        const parsedQuiz = JSON.parse(data.quiz);
        const limitedQuiz = parsedQuiz.slice(0,10);
        setQuiz(limitedQuiz);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching suggestion:', error);
      }
    }
    fetchData();
  }, []);
  
  const handleChange = async (event) => {
    setisAnswerSubmitted(false);
    setSelectedValue(event.target.value);
    console.log("event value:", selectedValue);
  };

  const moveNext = async() => {
    if(isAnswerSubmitted){
      setisAnswerSubmitted(false);
      setCurrent(current + 1);
      setSelectedValue("");
    }
    else{
      setError("please submit before proceeding");
      await delay(6000);
      setError("");
    }
    
  };

  const finish = () => {
    navigate(`/prompt/quiz/quizResult`,{ state: { scored: counter, total: size } });
  };

  const revealCorrect = async () => {
    if(!isAnswerSubmitted){
    if(selectedValue){
      setisAnswerSubmitted(true);
      const question = quiz[current];
      const answer = question[3];
      console.log("answer: ", answer);
      console.log("selectedRef: ", selectedValue);
      if(answer==selectedValue )
      {
        UpdateCounter(counter + 1);
      }
    }
    else{
      setError("please select your answer before submitting");
      await delay(6000);
      setError("");
    }
    }
    else{
      setError("Answer has been submitted, please click on next");
      await delay(6000);
      setError("");
    }
  }


  const renderOptions = (options) => {
    return options.map((opt, index) => (
      <div
        key={index}
        style={{
          marginTop: "5px",
          backgroundColor: `${
            isAnswerSubmitted && opt === quiz[current]?.[3]
              ? "lightgreen"
              : isAnswerSubmitted && opt === selectedValue && selectedValue !== quiz[current]?.[3]
              ? "lightcoral"
              : ""
          }`,
        }}
        id={index}
      >
      {isAnswerSubmitted
      ?<Radio
      checked={selectedValue === opt}
      onChange={handleChange}
      value={opt}
      name="radio-button-demo"
      aria-label={opt}
      disabled
    />
      :<Radio
      checked={selectedValue === opt}
      onChange={handleChange}
      value={opt}
      name="radio-button-demo"
      aria-label={opt}
    />
      }
        
        {opt}
      </div>
    ));
  };

  const question = quiz[current];
  const curQuestion = current + 1;
  const size = quiz.length;
  const moveRight = current + 1 < size;

  if (loading) {
    return <Typography variant="h1" component="h1" sx={{p:5, textAlign:"center"}}>LOADING</Typography>
  }

  return (
   
    <Box
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px"
      }}
    >
      {error && <CustomAlert severe="error" msg={`ERROR: ${error}`} />}
      <Paper style={styles.root} elevation={4}>
        <Typography component="p">
          <Button variant="contained" color="primary" style={styles.button}>
            <LiveHelpIcon />
          </Button>
          <span style={styles.questionMeta}>
            {" "}
            Question #{curQuestion} / {size}
          </span>
        </Typography>

        <hr style={{ marginBottom: "20px" }} />
        <Typography variant="h5" component="h2">
          {question[1]}
        </Typography>

        {renderOptions(question[2])}

        <div style={styles.footer}>
          <Button onClick={revealCorrect} variant="contained" color="secondary">
            Submit
          </Button>
          {moveRight ? (
            <Button
              onClick={moveNext}
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Next
            </Button>
          ) : isAnswerSubmitted && (
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              onClick={finish}
            >
              Finish
            </Button>
          )}

        </div>
      </Paper>
    </Box>

  );
}

Quiz.propTypes = {
  quiz: PropTypes.array.isRequired,
};

export default Quiz;

