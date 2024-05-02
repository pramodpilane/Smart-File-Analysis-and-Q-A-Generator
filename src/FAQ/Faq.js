import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import LoaderPage from "../assets/components/LoaderPage"; // Import LoaderPage component
import Button from "@mui/material/Button";

const Faq = () => {
  const [faq, setFaq] = React.useState([]); // State to hold FAQs
  const [loading, setLoading] = React.useState(true); // State to track loading status
  const [error, setError] = React.useState(""); // State to hold error message

  React.useEffect(() => {
    // Fetch FAQs from server when component mounts
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/faq", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json(); // Parse response as JSON
        const parsedFaq = JSON.parse(data.QnA); // Parse QnA string to JSON
        const limitedFaq = parsedFaq.slice(0, 10); // Limit FAQs to first 10 items
        setFaq(limitedFaq); // Update FAQs state
        setLoading(false); // Set loading state to false
      } catch (error) {
        setError(`Sorry, there is some issue with the server.`); // Set error message
        setLoading(false); // Set loading state to false
        console.error("Backend issue:", error); // Log error to console
      }
    }
    fetchData(); // Call fetchData function
  }, []);

   // Render loader page while loading
  if (loading) {
    return <LoaderPage text={"questions and answers"}/>
  }

  return (
    <>
      {error ? 
      (<>
          {/* Render error message if there's an error */}
          <Typography sx={{ textAlign: "center", paddingTop: "100px", fontWeight: "500"}} variant="h6" contained="h6">{error}</Typography>
          <Typography sx={{ textAlign: "center", paddingTop: "10px", fontWeight: "500"}} variant="h6" contained="h6">please try again...</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            {/* Button to reload the page */}
            <Button variant="outlined" color="error" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </Box>
      </>) :
      (<>
      {/* Render FAQs */}
      <Typography sx={{ textAlign: "center", paddingTop: "100px", textTransform: "uppercase", fontWeight: "700"}} variant="h4" contained="h4">Questions & Answers</Typography>
      <Box sx={{margin:"40px 100px"}}>
      {faq.map((i) => (<Accordion sx={{marginTop:"10px"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{fontWeight:"600"}}>{i[0]}</Typography> {/* Question */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{i[1]}</Typography> {/* Answer */}
        </AccordionDetails>
      </Accordion>))}
      </Box></>)} 
    </>
  )
}

export default Faq
