import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';


const Module2 = () => {
    const [question, setQuestion] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 100,
        lineHeight: '100px',
        cursor: "pointer"
    }));

    const lightTheme = createTheme({ palette: { mode: 'light' } });

    const myStyle = {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    }

    const submitQuestion = () => {
        if (!question.trim()) {
            setError('please enter a question before proceeding');
        }
        else {
            navigate(`/solution/${question}`);
        }
    }

    const submitSuggestion = (q) => {
        navigate(`/solution/${q}`);
    }

    return (
        <div style={myStyle}>
            <h2>HOW CAN I HELP YOU TODAY?</h2>
            <Grid sx={{
                width: 900,
                maxWidth: '100%',
                display: "flex",
                flexDirection: "row",
            }}>
                <TextField placeholder='ENTER PROMPT' fullWidth id="fullWidth" focused value={question} onChange={(e) => {setQuestion(e.target.value); setError("");}} />
                <Button variant="contained" onClick={submitQuestion}><SendIcon /></Button>
            </Grid><br />
            {error && <Alert severity="error">
                <strong>ERROR: </strong>{error}
            </Alert>}
            <br />
            <Grid container display="flex" justifyContent="center" spacing={2}>
                <Grid item xs={8}>
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
                            <Item elevation={10} onClick={() => submitSuggestion("SUGGESTION 1")}>
                                <b>SUGGESTION 1</b>
                            </Item>
                            <Item elevation={10} onClick={() => submitSuggestion("SUGGESTION 2")}>
                                <b>SUGGESTION 2</b>
                            </Item>
                            <Item elevation={10} onClick={() => submitSuggestion("SUGGESTION 3")}>
                                <b>SUGGESTION 3</b>
                            </Item>
                            <Item elevation={10} onClick={() => submitSuggestion("SUGGESTION 4")}>
                                <b>SUGGESTION 4</b>
                            </Item>
                        </Box>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    )
}

export default Module2
