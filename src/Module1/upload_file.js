import React from "react";
import logo1 from '../assets/images/OIG4.jpeg'
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Button,
  Paper,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from "@mui/icons-material/Delete";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "40em"
}));

const SubmitButton = styled(Button)(({ theme }) => ({
        maxWidth: '50em',
        minWidth: '40em',
        maxHeight: '7em',
        minHeight: '4em',
        fontsize: '10rem',
        marginTop: '3em'
  
}));

export default function Upload_file({selectedFiles, setSelectedFiles}) {
  const dense = false;
  const navigate = useNavigate();
 
  const uploadFile = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    await fetch("http://localhost:8000/upload", {
        method: 'POST',
        body: formData,
      });

    navigate(`/prompt`);
   }

  const styles = {
    icon: {
       fontsize: 70,
       color: "red"
    },

    button: {
        maxWidth: '50em',
        minWidth: '20em',
        maxHeight: '7em',
        minHeight: '5em',
        fontsize: '8rem'
    },
  };

  const uploadHandler = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const deleteFile = (filename) => {
    setSelectedFiles(selectedFiles.filter(file => file.name !== filename))
}

  const hasFiles = selectedFiles && selectedFiles.length > 0;

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "70vh"}}
      >
        {!hasFiles && <img src={logo1} alt="logo" style={{ height: "200px", width: "200px", cursor: "pointer" }}/>}
        <Grid item xs={3}>
          <Typography variant="h3" component="h2">
            <strong>SMART FILE ANALYSIS</strong>
          </Typography>
        </Grid>
        {/* Grid item: Upload file */}
        <Grid item xs={3}>
          <Paper square={false} elevation={20}>
            <Box
              height={200}
              width={600}
              my={5}
              flexDirection="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={4}
              p={4}
            >
              <Button
                component="label"
                role={undefined}
                variant="contained"
                style={styles.button}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                <strong> UPLOAD</strong>
                <VisuallyHiddenInput type="file" multiple accept=".pdf, .docx" onChange={uploadHandler}/>
              </Button>
              <Typography variant="h6" >Supported Files</Typography>
              <Typography variant="body2" gutterBottom>PDF, DOCX</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* table */}
        {!hasFiles && (<strong style={{textAlign:"center"}}>NOTE: please select a file to proceed further</strong>)}
        <Grid item xs={12} md={7}>
          <Typography sx={{ mt: 8, mb: 1 }} variant="h6" component="div">
            {hasFiles && (<>UPLOADED FILES</>)}
          </Typography>
          <Demo>
            <List dense={dense}>
              {hasFiles &&
                    selectedFiles.map((f) => (
                <ListItem 
                  secondaryAction={
                    <IconButton  color="error" size="large" edge="end" aria-label="delete" onClick={() => deleteFile(f.name)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={f.name}
                  />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>

        {/* Submit bttn */}
        {hasFiles && (<SubmitButton size = "large" variant="contained" onClick={uploadFile}>SUBMIT</SubmitButton>)}       
      </Grid>
    </>
  );
}
