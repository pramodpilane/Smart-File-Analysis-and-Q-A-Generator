import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = ({faq}) => {
  
  return (
    <>
      <Typography sx={{ textAlign: "center", paddingTop: "100px", textDecoration:"underline" }} variant="h4" contained="h4">Question & Answer</Typography>
      <div style={{margin:"40px 80px"}}>
      {faq.map((i) => (<Accordion sx={{marginTop:"20px"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{i[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{i[1]}</Typography>
        </AccordionDetails>
      </Accordion>))}
      </div> 
    </>
  )
}

export default Faq
