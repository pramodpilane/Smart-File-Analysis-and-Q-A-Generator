//importing react essentials
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
//importing images from assets
import logo1 from "../assets/images/OIG4.jpeg";
//importing components
import CustomTypography from '../assets/components/Typography';
import SubmitButton from '../assets/components/Buttons';
import UploadButton from '../assets/components/UploadButton';
import DeleteIconButton from '../assets/components/Icons';
//importing mui styles
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Divider,
} from "@mui/material";


const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "40em",
}));



export default function Upload_file({ selectedFiles, setSelectedFiles, setSuggestion }) {
  const dense = false;
  const navigate = useNavigate();

  const uploadFile = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });

    const response = await fetch("http://localhost:8000/suggest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    await setSuggestion(data.suggestion);
    navigate(`/prompt`);
  };

  const uploadHandler = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const deleteFile = (filename) => {
    setSelectedFiles(selectedFiles.filter((file) => file.name !== filename));
  };

  const hasFiles = selectedFiles && selectedFiles.length > 0;

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "70vh", paddingTop: "70px", pb: 10 }}
      >
        {hasFiles && (
          <div style={{paddingTop:"30px"}}></div>
        )}
        {!hasFiles && (
          <img
            src={logo1}
            alt="logo"
            style={{ height: "200px", width: "200px", cursor: "pointer" }}
          />
        )}
        <Grid item xs={3} >
        <CustomTypography variant="h3" text="SMART FILE ANALYSIS" sx={{mt:2}}/>
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
              <UploadButton action= {uploadHandler} />
              <CustomTypography variant="h6" text ="Supported Files" />
              <CustomTypography variant="body2" text = "PDF, DOCX"  />
             
            </Box>
          </Paper>
        </Grid>
        {/* table */}
        {!hasFiles && (
          <CustomTypography text="NOTE: Please select a file to proceed further" style={{ textAlign: "center" }} />
        )}
        <Grid item xs={12} md={7}>
        {hasFiles && (
          <CustomTypography text="Uploaded Files" variant="h6" style={{  mt: 8, mb: 1 }} component="div"/>
        )}
          
          <Demo>
            <List dense={dense} sx={{m:1}}>
              {hasFiles &&
                selectedFiles.map((f) => (
                  <>
                  <Divider component="li" />
                  <ListItem
                    secondaryAction={
                      <DeleteIconButton action = {() => deleteFile(f.name)} />
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <DescriptionIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={f.name} />
                  </ListItem>
                  <Divider component="li" />
                  </>
                ))}
            </List>
          </Demo>
        </Grid>

        {/* Submit bttn */}
        {hasFiles && (
          <SubmitButton size="large" variant="contained" onClick={uploadFile}>
          SUBMIT
        </SubmitButton>
        )}
      </Grid>
    </>
  );
}
