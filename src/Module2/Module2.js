import React, { useState } from 'react'
import logo1 from '../assets/images/OIG4.jpeg'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';


const Module2 = () => {
    // State variables for the input field and error handling
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = React.useState('');
    const [error, setError] = useState('');

    // Styled component for the suggestion items
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 100,
        lineHeight: '100px',
        cursor: "pointer"
    }));

    // Theme for the light mode
    const lightTheme = createTheme({ palette: { mode: 'light' } });

    // Styles for the container
    const myStyle = {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    }

    // Function to handle submission of question
    const submitQuestion = async (e) => {
        if (!question.trim()) {
            setError('please enter a question before proceeding');
            setAnswer("");
        }
        else {
            e.preventDefault();
            const response = await fetch('http://localhost:8000/answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question })
            });

            const data = await response.json();
            setAnswer(data.answer);
        }
    }

    const hasAns = answer && answer.length>0;
    return (
        <div style={myStyle}>
            {!hasAns && <><Box sx={{p: 2}}/><img src={logo1} alt="logo" style={{ height: "200px", width: "200px", cursor: "pointer" }}/></>}

            {/* Header */}
            <h1>HOW CAN I HELP YOU TODAY?</h1>

            {!hasAns && <Box sx={{p:9}}/>}

            {/* Suggestions grid */}
            <Grid container display="flex" justifyContent="center" spacing={2}>
                <Grid item xs={6}>
                    {/* Theme provider for light mode */}
                    <ThemeProvider theme={lightTheme}>
                        <Box
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 8,
                            }}
                        >
                            {/* Suggestions */}
                            <Item elevation={10} >
                                <b>SUGGESTION 1</b>
                            </Item>
                            <Item elevation={10} >
                                <b>SUGGESTION 2</b>
                            </Item>
                            <Item elevation={10} >
                                <b>SUGGESTION 3</b>
                            </Item>
                            <Item elevation={10} >
                                <b>SUGGESTION 4</b>
                            </Item>
                        </Box>
                    </ThemeProvider>
                </Grid>
            </Grid><br/><br/><br/>

            {/* Input field for user prompt */}
            <Grid sx={{
                width: 1600,
                maxWidth: '100%',
                display: "flex",
                flexDirection: "row",
            }}>
                <TextField placeholder='ENTER PROMPT' fullWidth id="fullWidth" focused value={question} onChange={(e) => { setQuestion(e.target.value); setError(""); }} />
                {/* Button to submit question */}
                <Button variant="contained" onClick={submitQuestion}><SendIcon /></Button>
            </Grid><br />

            {/* Display error if input field is empty & submit button is clicked */}
            {error && <Alert severity="error">
                <strong>ERROR: </strong>{error}
            </Alert>}

            <Grid sx={{
                width: 1500,
                maxWidth: '100%',
                margin:1,
                marginBottom:"auto"
            }}>
                {hasAns && <TextField minRows={14} value={answer} fullWidth multiline id="fullWidth" />}
            </Grid>           
        </div>
    )
}

export default Module2
