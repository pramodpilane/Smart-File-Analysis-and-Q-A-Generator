import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Rating,
  Box,
} from "@mui/material";
// for accordian
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

//For slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/slider1.png";
import banner2 from "../assets/images/slider2.png";
import banner3 from "../assets/images/slider3.png";
import banner4 from "../assets/images/slider4.png";
//logo
import logo1 from "../assets/images/OIG4.jpeg";
//images for how it works
import quiz from "../assets/images/quiz.png";
import chooseSuggestions from "../assets/images/choose_suggestion.png";
import learning from "../assets/images/learning.png";
import addFiles from "../assets/images/add_files.png";
//images for environment
import browser from "../assets/images/browser.png";
import no_install from "../assets/images/no-install.png";
import security from "../assets/images/file-security.png";
//for rating
import StarIcon from "@mui/icons-material/Star";
// for social media
import IconButton from "@mui/joy/IconButton";
import FacebookRoundedIcon from "../assets/images/facebook.png";
import InstagramIcon from "../assets/images/instagram.png";
import TwitterIcon from "../assets/images/twitter.png";
import GoogleIcon from "../assets/images/search.png";
import PinterestIcon from "../assets/images/pinterest.png";

//rating lables
const labels = {
  0.5: "Needs Work",
  1: "Not Great",
  1.5: "Could Be Better",
  2: "Okay",
  2.5: "Getting Better",
  3: "Good",
  3.5: "Pretty Good",
  4: "Very Good",
  4.5: "Excellent",
  5: "Amazing",
};

//setting rating label
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

//accordian settings
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1f5d9c" : "#1f5d9c",
  color: "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function About(props) {
  // Settings for slider
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    adaptiveHeight: false,
  };

  //styles for adding padding, margin, bgcolor to sections.
  const styles = {
    slider: {
      marginTop: "0px",
      marginBottom: "40px",
      ".slick-slide": {
        height: "80% !important",
      },
      ".slick-track": {
        display: "flex !important",
        flexDirection: "row !important",
        flexWrap: "nowrap !important",
        alignItems: "stretch !important",
      },
      ".slick-slide > div": {
        width: "100%",
        height: "80%",
        "object-fit": "fit",
      },
    },

    cards: {
      marginTop: "90px",
      width: "100vw",
      maxWidth: "100%",
      padding: "80px 0 100px 0",
      "background-color": "#F7F8F7",
    },

    para: {
      marginTop: "90px",
      marginBottom: "80px",
      padding: "80px",
      textAlign: "justify",
      "background-color": "#F7F8F7",
    },

    sliderImage: {
      width: "100%",
      height: "100%",
      "object-fit": "fit",
    },

    image: {
      "object-fit": "contain",
    },

    icons: {
      "object-fit": "contain",
      "object-position": "5% 150%",
    },

    footer: {
      marginTop: "90px",
      padding: "40px 80px",
      textAlign: "justify",

      "background-color": "#12467b",
    },
    faq: {
      margin: "40px 10% 10px",
    },
  };

  //setting value for ratings
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

  //settings for accordian
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth="false" disableGutters sx={{ m: 0, p: 0 }}>
      {/* Slider images */}
      <div style={styles.slider}>
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="Banner 1" style={styles.sliderImage} />
          </div>
          <div>
            <img src={banner2} alt="Banner 2" style={styles.sliderImage} />
          </div>
          <div>
            <img src={banner3} alt="Banner 3" style={styles.sliderImage} />
          </div>
          <div>
            <img src={banner4} alt="Banner 4" style={styles.sliderImage} />
          </div>
        </Slider>
        <br />
      </div>

      {/* About paragraph */}
      <Typography style={styles.para} variant="body1" gutterBottom>
        <Grid container alignItems="center" justifyContent="center">
          <img
            src={logo1}
            alt="logo"
            style={{ height: "300px", width: "300px", cursor: "pointer" }}
          />
        </Grid>
        <br />
        <br />
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Welcome to Study Genius
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Your Ultimate Study Companion
        </Typography>
        <br />
        <Box sx={{ padding: "0 20%" }}>
          <p>
            Welcome to Study Genius, your ultimate study companion designed to
            revolutionize the way you learn, teach, and research. Our
            specialized question-and-answer (Q/A) generator platform is
            meticulously crafted to enhance your knowledge management processes,
            ensuring seamless access to tailored study materials.
          </p>

          <p>
            Upload your study materials effortlessly in various formats like PDF
            and DOCX, and receive instant feedback on your progress. Our
            platform prioritizes accuracy and coherence in answers, generating
            responses based on the content of your uploaded materials while
            providing the source file for reference.
          </p>

          <p>
            But that's not all - Study Genius goes beyond basic Q/A. Explore
            suggested explanations on specific topics within your materials,
            develop mock quizzes, and access curated Questions & Answers
            sections for practice. Our summary feature highlights key points and
            concepts, presenting them in easy-to-digest formats for efficient
            learning.
          </p>

          <p>
            With scalability at the forefront of our development, Study Genius
            is equipped to handle a growing user base and increasing volumes of
            study materials without compromising efficiency. Rest assured, our
            platform operates within technological constraints, delivering
            on-time, and with ongoing support services to ensure your success.
          </p>

          <br />
          <br />
          <p style={{ textAlign: "center" }}>
            <b>
              Join us on this journey to academic excellence with Study Genius{" "}
              <br />
            </b>
            where learning meets innovation, and knowledge knows no bounds.
          </p>
        </Box>
      </Typography>

      {/*how it works? */}
      <Box container style={styles.cards} id="how-it-works">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          How It Works
        </Typography>
        <br />
        <br />
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          sx={{ height: "100%" }}
        >
          <Grid item xs={"auto"}>
            <Card sx={{ maxWidth: 345, height: "100%", paddingTop: "20px" }}>
              <CardMedia
                component="img"
                height="180"
                image={addFiles}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography gutterBottom variant="h6" component="div">
                  Upload Your Study Materials
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Begin by uploading your study materials, whether it's
                  textbooks, lecture notes, or research articles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={"auto"}>
            <Card sx={{ maxWidth: 345, height: "100%", paddingTop: "20px" }}>
              <CardMedia
                component="img"
                height="180"
                image={chooseSuggestions}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography gutterBottom variant="h6" component="div">
                  Input Your Questions or Choose from Suggestions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Next, input your questions directly or select from our
                  suggestions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={"auto"}>
            <Card sx={{ maxWidth: 345, height: "100%", paddingTop: "20px" }}>
              <CardMedia
                component="img"
                height="180"
                image={quiz}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography gutterBottom variant="h6" component="div">
                  Generate Personalized Content
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our advanced algorithms analyze your inputs to generate
                  tailored quizzes, summaries, and explanations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={"auto"}>
            <Card sx={{ maxWidth: 345, height: "100%", paddingTop: "20px" }}>
              <CardMedia
                component="img"
                height="180"
                image={learning}
                alt="green iguana"
                style={styles.image}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography gutterBottom variant="h6" component="div">
                  Enhance Your Learning Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dive into your customized content to elevate your self-study,
                  revision, exam prep, or lesson planning efforts.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Typography style={styles.para} variant="body1" gutterBottom>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Empower Your Learning Journey At Study Genius
        </Typography>
        <p style={{ padding: "0 20%" }}>
          We are committed to empowering students with comprehensive and
          accessible study aids. By leveraging cutting-edge technology, we
          bridge the gap between vast information repositories and your
          individual learning needs. Our objective is to enhance comprehension,
          retention, and overall academic success by providing tailored
          responses that cater to diverse learning styles.
        </p>
      </Typography>

      {/* supporting learning */}
      <Box container style={styles.cards}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Supports Your Learning Environment
        </Typography>
        <br />
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          sx={{ height: "100%" }}
        >
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: "100%", paddingTop: "20px" }}>
              <CardMedia
                component="img"
                height="90"
                image={browser}
                alt="green iguana"
                style={styles.icons}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Browser Compatibility
                </Typography>
                <Typography variant="body2">
                  No need to install any software. Study Genius works seamlessly
                  in your browser, ensuring accessibility across all current
                  operating systems and browsers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: "100%", paddingTop: "20px" }}>
              <CardMedia
                component="img"
                height="100"
                image={no_install}
                alt="green iguana"
                style={styles.icons}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  No Installation Required
                </Typography>
                <Typography variant="body2">
                  Our platform operates in the cloud, eliminating the need for
                  you to download or install any software. Extract pages and
                  access your study materials effortlessly without consuming
                  your system's resources.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: "100%", paddingTop: "20px" }}>
              <CardMedia
                component="img"
                height="100"
                image={security}
                alt="green iguana"
                style={styles.icons}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Security Measures
                </Typography>
                <Typography variant="body2">
                  Rest assured that your files and results are secure with Study
                  Genius. We do not store your files on our servers longer than
                  necessary, prioritizing your privacy and security.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ*/}

      <Box style={styles.para} variant="body1" gutterBottom>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          FAQ's
        </Typography>
        <div style={styles.faq}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ marginTop: "10px" }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                How can I upload my study materials to the platform?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can easily upload your study materials by accessing the
                "File Upload" feature on the platform. Simply select the desired
                files from your device and follow the prompts to upload them in
                formats such as PDF and DOCX.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                What types of questions can I ask using the platform?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can ask questions directly related to the content of your
                uploaded files. Whether you need clarification on a specific
                topic or seek additional information, our platform is designed
                to provide accurate answers tailored to your study materials.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                How are answers generated by the platform?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answers are generated using advanced algorithms that analyze the
                content of your uploaded files. Our system automatically
                retrieves relevant information and presents comprehensive
                answers, ensuring accuracy and credibility.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                What happens if the platform cannot find an answer within my
                uploaded files?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In such cases, the platform seamlessly integrates with external
                search engine resources to retrieve relevant information. You
                will be notified if the system resorts to external sources for
                generating answers, maintaining transparency and trust.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                Can I receive suggestions for specific topics within my study
                materials?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, our platform provides random suggestions based on common
                headings extracted from your uploaded files. These suggestions
                prompt further exploration of specific topics, enhancing your
                learning experience.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                How can I create quizzes based on my study materials?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can develop custom quizzes using the "Develop a Personalized
                Quiz" feature on the platform. This functionality allows you to
                design practice quizzes tailored to your study material,
                reinforcing your understanding of key concepts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                Is it possible to generate summaries of my study materials?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely! Our platform offers the option to generate detailed
                summaries highlighting key words and key concepts covered in
                your uploaded files. The 'Generate Keywords and Keypoints'
                feature streamlines the process of reviewing study materials,
                aiding in comprehension and retention.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: 600 }}>
                Can I generate sets of questions and answers for practice?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you can generate sets of questions and corresponding
                answers based on your uploaded files. The 'Questions & Answers'
                feature enables active engagement with the study material,
                facilitating practice and reinforcement of important concepts.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>

      {/* Rating*/}
      <Typography style={styles.para} variant="body1" gutterBottom>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Please rate this app
        </Typography>

        <Grid
          container
          direction="column"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55, "font-size": "5rem" }}
                  fontSize="inherit"
                />
              }
              icon={<StarIcon style={{ fontSize: "5rem" }} />}
            />
          </Grid>
          <Grid item>
            {value !== null && (
              <Typography
                gutterBottom
                variant="h5"
                sx={{ mt: 2 }}
                component="div"
              >
                {labels[hover !== -1 ? hover : value]}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Typography>

      {/* Share the page*/}
      <Box style={styles.para} variant="body1" gutterBottom>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Please share this page
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ mt: 2, textAlign: "center" }}
          component="div"
        >
          Help our new, cool and free tools to grow! Write an article about our
          tools on your forum, blog or website.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            mt: "40px",
          }}
        >
          <IconButton variant="plain">
            <img src={GoogleIcon} alt="Google Icon" height="100" width="100" />
          </IconButton>
          <IconButton variant="plain">
            <img
              src={FacebookRoundedIcon}
              alt="Facebook Icon"
              height="100"
              width="100"
            />
          </IconButton>
          <IconButton variant="plain">
            <img
              src={InstagramIcon}
              alt="Instagram Icon"
              height="100"
              width="100"
            />
          </IconButton>
          <IconButton variant="plain">
            <img
              src={TwitterIcon}
              alt="Twitter Icon"
              height="100"
              width="100"
            />
          </IconButton>
          <IconButton variant="plain">
            <img
              src={PinterestIcon}
              alt="Pinterest Icon"
              height="100"
              width="100"
            />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
