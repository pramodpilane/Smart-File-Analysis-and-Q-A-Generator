import * as React from 'react';

import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = ({color}) => {
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color && {
          bgcolor: `${color}.350`,
        }),
        flexGrow: 1,
        p: 0.5,
        //position:"sticky",
        bottom:0,
        width: "100%", // Set width to 100% of viewport width
        padding: "8px 0px", // Adjust padding as needed
        margin: '0px'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GoogleIcon />
        </IconButton>
        <IconButton variant="plain">
          <InstagramIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ ml:"auto", display: { md: 'flex' } }}>
              Copyright <CopyrightIcon/> StudyGenius.com
        </Typography>
      </Box>
    </Sheet>
  );
};

export default Footer;



