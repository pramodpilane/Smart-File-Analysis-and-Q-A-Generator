import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const Faq = () => {
  const [faq, setFaq] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/faq", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      setFaq(JSON.parse(data.QnA));
      } catch (error) {
        console.error('Error fetching suggestion:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Typography sx={{ textAlign: "center", paddingTop: "100px", textTransform: "uppercase", fontWeight: "700"}} variant="h4" contained="h4">Questions & Answers</Typography>
      <Box sx={{margin:"40px 100px"}}>
      {faq.map((i) => (<Accordion sx={{marginTop:"10px"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{fontWeight:"600"}}>{i[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{i[1]}</Typography>
        </AccordionDetails>
      </Accordion>))}
      </Box> 
    </>
  )
}

export default Faq
