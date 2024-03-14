import React from "react";
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


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

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

export default function Upload_file() {
  // const [dense, setDense] = useState(false);
  // const [secondary, setSecondary] = useState(false);
  const dense = false;
  const navigate = useNavigate();
 
  const uploadFile = () => {
      navigate(`/prompt`);
  }

  const styles = {
    icon: {
       fontsize: 70,
       color: "red"
      //padding: '12px 0px',
      // '&:hover': {
      //   backgroundColor: 'darkblue',
      // },
    },

    button: {
        maxWidth: '50em',
        minWidth: '20em',
        maxHeight: '7em',
        minHeight: '5em',
        fontsize: '8rem'
    },
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
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
                <VisuallyHiddenInput type="file" />
              </Button>
              <Typography variant="h6" >Supported Files</Typography>
              <Typography variant="body2" gutterBottom>PDF, DOCX</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* table */}
        <Grid item xs={12} md={7}>
          <Typography sx={{ mt: 8, mb: 1 }} variant="h6" component="div">
            UPLOADED FILES
          </Typography>
          <Demo>
            <List dense={dense}
                
            >
              {generate(
                <ListItem 
                  secondaryAction={
                    <IconButton  color="error" size="large" edge="end" aria-label="delete">
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
                    primary="Document.pdf"
                    secondary="30 MB"
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>

        {/* Submit bttn */}
        <SubmitButton size = "large" variant="contained" onClick={uploadFile}>SUBMIT</SubmitButton>
      </Grid>
    </>
  );
}
