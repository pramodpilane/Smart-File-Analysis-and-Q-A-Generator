import * as React from 'react';
import { Link } from "react-router-dom";
import logo1 from '../assets/images/OIG4.jpeg'
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import Typography from '@mui/material/Typography';
import CustomTypography from '../assets/components/Typography';
import zIndex from '@mui/material/styles/zIndex';


const Header = () => {
  const [binFolderHasFiles, setBinFolderHasFiles] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:8000/check_bin_folder")
      .then((response) => response.json())
      .then((data) => {
        setBinFolderHasFiles(data.bin_folder_has_files);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

    return (
      <Sheet
        variant="solid"
        invertedColors
        sx={{
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
        }}
      >

      {/* <Link to="/about"><img src={logo1} alt="logo" style={{ height: "80px", width: "90px", cursor: "pointer" }}/></Link> */}
          
        <Box sx={{ flex: 1, display: 'flex', px: 2, cursor: "pointer" }}>
            <Typography variant="h4" component="div">
            <strong>StudyGenius</strong>
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexShrink: 0, gap: 8, px: 8 }}>
          <Link to="/" style={{color:"white", textDecoration:"none"}}> <CustomTypography variant="h6" text="Home" style={{'&:hover': {color: '#0B6BCB',bgcolor:'white', p:0.5}}}/> </Link>
          {binFolderHasFiles && <Link to="/prompt" style={{color:"white", textDecoration:"none"}}> <CustomTypography variant="h6" text="Prompt" style={{'&:hover': {color: '#0B6BCB',bgcolor:'white', p:0.5}}}/> </Link>}
          <Link to="/about" style={{color:"white", textDecoration:"none"}}> <CustomTypography variant="h6" text="About" style={{'&:hover': {color: '#0B6BCB',bgcolor:'white', p:0.5}}}/> </Link>
        </Box>

      </Sheet>
    );
  }

export default Header
