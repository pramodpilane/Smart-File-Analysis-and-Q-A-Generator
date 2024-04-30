//importing react essentials
import React, { useState, useRef, useEffect  } from "react";
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
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import FilesSVG from "../assets/images/FileSVG";
import quiz from "../assets/images/quiz.png";
import learning from "../assets/images/learning.png";
import addFiles from "../assets/images/add_files.png";
import chooseSuggestions from "../assets/images/choose_suggestion.png";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "40em",
}));

export default function Upload_file({ selectedFiles, setSelectedFiles }) {
  const dense = false;
  const [success, setSuccess] = useState(false);
  const [isSubmitProcess, setSubmitProcess] = useState(false);
  const [warning, setWarning] = React.useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  const styles = {
    cards: {
      marginTop: '90px', 
      width: '100vw',
      maxWidth:'100%',
      padding: '80px 0 100px 0',
      'background-color': '#F7F8F7',
    },

    para: {
      marginTop: '90px', 
      marginBottom: '80px',
      padding: '80px' ,
      textAlign: 'justify',
      'background-color': '#F7F8F7',
    },

    image: {
       'object-fit':'contain'
    }
  };

  const uploadFile = async () => {
    try{
      setSubmitProcess(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const response = await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });
    if (response.status === 200) {
      setSuccess(true);

      setTimeout(() => {
        setSubmitProcess(false);
        setSuccess(false);
        navigate(`/prompt`);
      }, 3000);
    } else {
      setError("Error uploading files. Please try again....");
    }
    }
    catch(error){
      setError("Sorry, there is some issue with server. Please try again....");
      console.error("Upload error:", error);
    }
  };

  async function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  const uploadHandler = async (e) => {
    const files = Array.from(e.target.files);
    const uniqueFiles = files.filter(
      (file) =>
        !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
    );
    const remainingSpace = 5 - selectedFiles.length;
    const filesToUpload = uniqueFiles.slice(0, remainingSpace);
    setSelectedFiles([...selectedFiles, ...filesToUpload]);
    if (selectedFiles.length + uniqueFiles.length > 5) {
      setWarning("You can only upload up to 5 files");
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
      {error && (
        <CustomAlert
        severe="error"
        msg={error}
      />
      )}
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
        {warning && (
          <CustomAlert severe="warning" msg={`WARNING: ${warning}`} />
        )}
        {hasFiles && <div style={{ paddingTop: "30px" }}></div>}
        {
          <img
            src={logo1}
            alt="logo"
            style={{ height: "200px", width: "200px", cursor: "pointer" }}
          />
        }
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
            <div style={{ maxHeight: "250px", overflow: "auto" }}>
              <List dense={dense} sx={{ m: 1 }}>
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
          <Button
            variant="outlined"
            color="error"
            onClick={() => setSelectedFiles([])}
          >
            CLEAR ALL FILES
          </Button>
        )}
        {/* Submit bttn */}

        {hasFiles && (
          <SubmitButton size="large" variant="contained" onClick={uploadFile}>
            SUBMIT
          </SubmitButton>
        )}

<Box container style={styles.cards} id="how-it-works">
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        How It Works
      </Typography><br /><br />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        sx={{ height: '100%' }}
      
      >
        <Grid item xs={'auto'} >
          <Card sx={{ maxWidth: 345, height: '100%', paddingTop: '20px'}}>
            
              <CardMedia
                component="img"
                height="180"
                image={addFiles}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Upload Your Study Materials
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Begin by uploading your study materials, whether it's textbooks, lecture notes, or research articles.
                </Typography>
              </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={'auto'}>
        <Card sx={{ maxWidth: 345, height: '100%', paddingTop: '20px'}}>
            
              <CardMedia
                component="img"
                height="180"
                image={chooseSuggestions}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Input Your Questions or Choose from Suggestions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Next, input your questions directly or select from our suggestions.
                </Typography>
              </CardContent>
           
          </Card>
        </Grid>
        <Grid item xs={'auto'}>
        <Card sx={{ maxWidth: 345, height: '100%', paddingTop: '20px'}}>
            
              <CardMedia
                component="img"
                height="180"
                image={quiz}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Generate Personalized Content
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Our advanced algorithms analyze your inputs to generate tailored quizzes, summaries, and explanations.
                </Typography>
              </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={'auto'}>
        <Card sx={{ maxWidth: 345, height: '100%', paddingTop: '20px'}}>
            
              <CardMedia
                component="img"
                height="180"
                image={learning}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Enhance Your Learning Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Dive into your customized content to elevate your self-study, revision, exam prep, or lesson planning efforts.
                </Typography>
              </CardContent>
           
          </Card>
        </Grid>
      </Grid>
      </Box>
      </Grid>
    </>
  );
}
