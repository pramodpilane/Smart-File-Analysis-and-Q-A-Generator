import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
  Rating,
} from "@mui/material";
import Box from "@mui/material/Box";
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/slider1.png";
import banner2 from "../assets/images/slider2.png";
import banner3 from "../assets/images/slider3.png";
import banner4 from "../assets/images/slider4.png";
import logo1 from "../assets/images/OIG4.jpeg";
import quiz from "../assets/images/quiz.png";
import learning from "../assets/images/learning.png";
import addFiles from "../assets/images/add_files.png";
import browser from "../assets/images/browser.png";
import no_install from "../assets/images/no-install.png";
import security from "../assets/images/file-security.png";
import chooseSuggestions from "../assets/images/choose_suggestion.png";

const labels = {
  0.5: 'Useless',
  1: 'Bad',
  1.5: 'Poor',
  2: 'Ok',
  2.5: 'Nice',
  3: 'Good',
  3.5: 'Better',
  4: 'Best',
  4.5: 'Excellent',
  5: 'Outstanding',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

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
      "object-position": "5% 150%"
    },
  };

  

  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

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
        <Grid container alignItems="center"
        justifyContent="center">
          <img
            src={logo1}
            alt="logo"
            style={{ height: "300px", width: "300px", cursor: "pointer" }}
          />
          </Grid>
      <br/><br/>
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
        <Box sx={{padding: "0 20%"}}>
        <p>
          Welcome to Study Genius, your ultimate study companion designed to
          revolutionize the way you learn, teach, and research. Our specialized
          question-and-answer (Q/A) generator platform is meticulously crafted
          to enhance your knowledge management processes, ensuring seamless
          access to tailored study materials.
        </p>
        
        <p>
          Upload your study materials effortlessly in various formats like PDF
          and DOCX, and receive instant feedback on your progress. Our platform
          prioritizes accuracy and coherence in answers, generating responses
          based on the content of your uploaded materials while providing the
          source file for reference.
        </p>
       
        <p>
          But that's not all - Study Genius goes beyond basic Q/A. Explore
          suggested explanations on specific topics within your materials,
          develop mock quizzes, and access curated Questions & Answers sections
          for practice. Our summary feature highlights key points and concepts,
          presenting them in easy-to-digest formats for efficient learning.
        </p>
      
        <p>
          With scalability at the forefront of our development, Study Genius is
          equipped to handle a growing user base and increasing volumes of study
          materials without compromising efficiency. Rest assured, our platform
          operates within technological constraints, delivering on-time, and
          with ongoing support services to ensure your success.
        </p>
       
      <br/><br />
        <p style={{textAlign: "center"}}><b>
          Join us on this journey to academic excellence with Study Genius  <br/></b>
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
        <Typography variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}>
        Empower Your Learning Journey At Study Genius</Typography> 
        <p style={{padding:"0 20%"}}>
        We are committed to
        empowering students with comprehensive and accessible study aids. By
        leveraging cutting-edge technology, we bridge the gap between vast
        information repositories and your individual learning needs. Our
        objective is to enhance comprehension, retention, and overall academic
        success by providing tailored responses that cater to diverse learning
        styles.</p>
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
            <Card sx={{ minWidth: 275, height: "100%", paddingTop: "20px"}}>
            <CardMedia
                component="img"
                height="90"
                image={browser}
                alt="green iguana"
                style={styles.icons}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div"
                >
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
                <Typography gutterBottom variant="h6" component="div"
                >
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
                <Typography gutterBottom variant="h6" component="div"
                >
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

      {/* 3 sample paras */}
      
      <Typography style={styles.para} variant="body1" gutterBottom>
        Questions and Answers
      </Typography>
      <Typography style={styles.para} variant="body1" gutterBottom>
      <Typography variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}>
        Please rate this app</Typography> 
        
        <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        size="large"
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      /><br />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
      </Typography>
      <Typography style={styles.para} variant="body1" gutterBottom>
        Please share this page Help our new, cool and free tools to grow! Write
        an article about our tools on your forum, blog or website.
      </Typography>

      {/* Get started button */}
      <a href="/signup">
        <Button variant="contained" sx={{ mt: 4 }}>
          Get Started
        </Button>
      </a>
    </Container>
  );
}
