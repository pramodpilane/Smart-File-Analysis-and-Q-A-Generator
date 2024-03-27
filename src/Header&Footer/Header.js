import * as React from 'react';
import { Link } from "react-router-dom";
import logo1 from '../assets/images/OIG4.jpeg'
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import Typography from '@mui/material/Typography';
import zIndex from '@mui/material/styles/zIndex';

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

const Header = ({suggestion}) => {

    return (
      <Sheet
        variant="solid"
        invertedColors
        sx={styles.sheet}
      >
        <Box sx={{ flex: 1, display: 'flex', px: 2 }}>
            <Typography variant="h4" component="div">
              <strong>StudyGenius</strong>
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexShrink: 0, gap: 8, px: 8 }}>
          <Link to="/" style={styles.link}>
            <Box sx={styles.linkWrapper}>
              <Typography variant="h6" component="div">
                Home
              </Typography>
            </Box>
          </Link>
          {suggestion && 
            <Link to="/prompt" style={styles.link}>
              <Box sx={styles.linkWrapper}>
                <Typography variant="h6" component="div">
                  Prompt
                </Typography>
              </Box>
            </Link>
          }
          <Link to="" style={styles.link}>
            <Box sx={styles.linkWrapper}>
              <Typography variant="h6" component="div">
                About
              </Typography>
            </Box>
          </Link>
        </Box>

      </Sheet>
    );
}

export default Header;
