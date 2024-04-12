//importing react essentials
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//importing images from assets
import logo1 from "../assets/images/OIG4.jpeg";
//importing components
import CustomTypography from "../assets/components/Typography";
import SubmitButton from "../assets/components/Buttons";
import UploadButton from "../assets/components/UploadButton";
import DeleteIconButton from "../assets/components/Icons";
import CustomAlert from "../assets/components/Alert";
//importing mui styles
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Divider,
} from "@mui/material";
import FilesSVG from "../assets/images/FileSVG";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "40em",
}));

export default function Upload_file({ selectedFiles, setSelectedFiles }) {
  const dense = false;
  const [success, setSuccess] = useState(false);
  const [isSubmitProcess, setSubmitProcess] = useState(false);
  const [warning, setWarning] = React.useState();
  const navigate = useNavigate();

  const uploadFile = async () => {
    setSubmitProcess(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });

    setSuccess(true);

    setTimeout(() => {
      setSubmitProcess(false);
      setSuccess(false);
      navigate(`/prompt`);
    }, 3000);
  };

  async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  const uploadHandler = async(e) => {
    const files = Array.from(e.target.files);
    const uniqueFiles = files.filter(file => !selectedFiles.some(selectedFile => selectedFile.name === file.name));
    const remainingSpace = 5 - selectedFiles.length;
    const filesToUpload = uniqueFiles.slice(0, remainingSpace);
    setSelectedFiles([...selectedFiles, ...filesToUpload]);
    if (selectedFiles.length + uniqueFiles.length > 5) {
      setWarning('You can only upload up to 5 files');
      await delay(6000);
      setWarning("");
    } 
  };

  const deleteFile = (filename) => {
    setSelectedFiles(selectedFiles.filter((file) => file.name !== filename));
  };

  const hasFiles = selectedFiles && selectedFiles.length > 0;

  return (
    <>
      {success && (
        <CustomAlert
          severe="success"
          msg={`Files are uploaded successfully `}
        />
      )}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "70vh", paddingTop: "70px", pb: 10 }}
      >
        {warning && <CustomAlert severe="warning" msg={`WARNING: ${warning}`} />}
        {hasFiles && (
          <div style={{paddingTop:"30px"}}></div>
        )}
        {(
          <img
            src={logo1}
            alt="logo"
            style={{ height: "200px", width: "200px", cursor: "pointer" }}
          />
        )}
        <Grid item xs={3}>
          {/* <CustomTypography variant="h3" text="SMART FILE ANALYSIS" sx={{mt:2}}/> */}
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
              <FilesSVG />
              <UploadButton
                action={uploadHandler}
                isDisabled={isSubmitProcess}
              />
              <CustomTypography variant="h6" text="Supported Files" />
              <CustomTypography variant="body2" text="PDF, DOCX" />
            </Box>
          </Paper>
        </Grid>
        {/* table */}
        {!hasFiles && (
          <CustomTypography
            text="NOTE: Please select a file to proceed further"
            style={{ textAlign: "center" }}
          />
        )}
        <Grid item xs={12} md={7}>
          {hasFiles && (
            <CustomTypography
              text="Uploaded Files"
              variant="h6"
              style={{ mt: 8, mb: 1 }}
              component="div"
            />
          )}

          <Demo>
          <div style={{ maxHeight: '250px', overflow: 'auto' }}>
            <List dense={dense} sx={{m:1}}>
              {hasFiles &&
                selectedFiles.map((file) => (
                  <>
                    <Divider component="li" />
                    <ListItem
                      secondaryAction={
                        <DeleteIconButton
                          action={() => deleteFile(file.name)}
                        />
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <DescriptionIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={file.name} />
                    </ListItem>
                    <Divider component="li" />
                  </>
                ))}
            </List>
          </div>
          </Demo>
        </Grid>
        {hasFiles && (
          <Button variant="outlined" color="error" onClick={()=>setSelectedFiles([])}>
          CLEAR ALL FILES
          </Button>
        )}
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
