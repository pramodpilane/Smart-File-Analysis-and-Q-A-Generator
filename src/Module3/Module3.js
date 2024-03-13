import React from 'react'
import {useParams} from 'react-router-dom'
import { Grid } from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const Module3 = () => {
    // Extracting the question parameter from the URL using useParams hook
    const {question} = useParams();

    // Styles for the container
    const myStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 50
    }

    return (
        <div style={myStyle}>
            {/* Input field for user prompt */}
            <Grid sx={{
                width: 1000,
                maxWidth: '100%',
                display: "flex",
                flexDirection: "row",
            }}>
                <TextField placeholder='ENTER PROMPT' defaultValue={question} fullWidth id="fullWidth" focused />
                {/* Button to submit question */}
                <Button variant="contained"><SendIcon /></Button>
            </Grid>
        {/* Textarea to see the retrieved answer */}
        <Grid sx={{
                width: 1000,
                maxWidth: '100%',
                margin:1
            }}>
                <TextField placeholder='answer...' minRows={15} disabled fullWidth multiline id="fullWidth"/>
            </Grid>
        </div>
    )
}

export default Module3
