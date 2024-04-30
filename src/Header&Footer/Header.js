import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';

// Define styles object
const styles = {
  sheet: {
    marginTop: "0",
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    flexGrow: 1,
    zIndex: 999,
    maxHeight: "64px",
    p: 2,
    width:'100%',
    bgcolor: `${'primary'}.700`
  },
  link: {
    color: "white",
    textDecoration: "none",
    height: '100%'
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    height: '100%',
    '&:hover': {
      textDecoration: "underline",
           
    }
  }
};

const Header = () => {
  const [binFolderHasFiles, setBinFolderHasFiles] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/check_bin_folder", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        setBinFolderHasFiles(data.bin_folder_has_files);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

    return (
      <Sheet
        variant="solid"
        invertedColors
        sx={styles.sheet}
      >
        <Box sx={{ flex: 1, display: 'flex', px: 2 }}>
        <Link to="/" style={styles.link} >
            <Typography variant="h4" component="div">
              <strong>StudyGenius</strong>
            </Typography>
            </Link>
        </Box>

        <Box sx={{ display: 'flex', flexShrink: 0, gap: 8, px: 8 }}>
          <Link to="/" style={styles.link}>
            <Box sx={styles.linkWrapper}>
              <Typography variant="h6" component="div">
                Home
              </Typography>
            </Box>
          </Link>
          {binFolderHasFiles && 
            <Link to="/prompt" style={styles.link}>
              <Box sx={styles.linkWrapper}>
                <Typography variant="h6" component="div">
                  Prompt
                </Typography>
              </Box>
            </Link>
          }
          <Link to="/about" style={styles.link}>
            <Box sx={styles.linkWrapper}>
              <Typography variant="h6" component="div">
                About
              </Typography>
            </Box>
          </Link>

          <a href="/#how-it-works" style={styles.link}>
            <Box sx={styles.linkWrapper}>
              <Typography variant="h6" component="div">
                How It Works
              </Typography>
            </Box>
          </a>

        </Box>

      </Sheet>
    );
}

export default Header;
