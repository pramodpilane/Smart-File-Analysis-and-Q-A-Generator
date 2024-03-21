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
      {faq.map((i) => (<Accordion sx={{margin:"20px 80px"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{i[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{i[1]}</Typography>
        </AccordionDetails>
      </Accordion>))}
    </>
  )
}

export default Faq
