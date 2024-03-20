import * as React from 'react';
import { Link } from "react-router-dom";
import logo1 from '../assets/images/OIG4.jpeg'
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import Typography from '@mui/material/Typography';


const Header = ({color,setColor}) => {

    return (
      <Sheet
        variant="solid"
        color={color}
        invertedColors
        sx={{
          marginTop: "0",
          display: 'flex',
          position: 'fixed',
          alignItems: 'center',
          flexGrow: 1,
          p: 2,
          width:'100%',
          ...(color && {
            bgcolor: `${color}.700`,
        }),
        }}
      >

      {/* <Link to="/about"><img src={logo1} alt="logo" style={{ height: "80px", width: "90px", cursor: "pointer" }}/></Link> */}
          
        <Box sx={{ flex: 1, display: 'flex', px: 2, cursor: "pointer" }}>
            <Typography variant="h4" component="div">
            <strong>StudyGenius</strong>
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
          <Badge badgeContent={0} variant="solid" color="danger">
                <Button
                    onClick={() => {
                        const colors = ['primary', 'neutral'];
            
                        const nextColorIndex = colors.indexOf(color) + 1;
                        setColor(colors[nextColorIndex] ?? colors[0]);
                    }}
                >
                    <ColorLensRoundedIcon fontSize="small" />
                </Button>
          </Badge>
        </Box>

      </Sheet>
    );
  }

export default Header
