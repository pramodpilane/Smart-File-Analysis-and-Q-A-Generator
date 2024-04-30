import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import LoaderPage from "../assets/components/LoaderPage";
import Button from "@mui/material/Button";

const Faq = () => {
  const [faq, setFaq] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

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
      const parsedFaq = JSON.parse(data.QnA);
      const limitedFaq = parsedFaq.slice(0,10);
      setFaq(limitedFaq);
      setLoading(false);
      } catch (error) {
        setError(`Sorry, there is some issue with server.`);
        setLoading(false);
        console.error("Backend issue:", error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoaderPage text={"questions and answers"}/>
  }
  return (
    <>
      {error ? 
      (<>
          <Typography sx={{ textAlign: "center", paddingTop: "100px", fontWeight: "500"}} variant="h6" contained="h6">{error}</Typography>
          <Typography sx={{ textAlign: "center", paddingTop: "10px", fontWeight: "500"}} variant="h6" contained="h6">please try again...</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="outlined" color="error" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </Box>
      </>) :
      (<><Typography sx={{ textAlign: "center", paddingTop: "100px", textTransform: "uppercase", fontWeight: "700"}} variant="h4" contained="h4">Questions & Answers</Typography>
      <Box sx={{margin:"40px 100px"}}>
      {faq.map((i) => (<Accordion sx={{marginTop:"10px"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{fontWeight:"600"}}>{i[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{i[1]}</Typography>
        </AccordionDetails>
      </Accordion>))}
      </Box></>)} 
    </>
  )
}

export default Faq
