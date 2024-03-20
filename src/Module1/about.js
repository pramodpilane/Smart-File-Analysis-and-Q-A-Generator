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
} from "@mui/material";
import Box from '@mui/material/Box';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/sample.jpeg";
import banner2 from "../assets/images/sample2.png";

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
    adaptiveHeight: false
  };

  //styles for adding padding, margin, bgcolor to sections.
  const styles = {
    slider: {
      marginTop: '0px', 
      marginBottom: '40px',
      '.slick-slide': {
        height: 'auto !important'
      },
      '.slick-track': {
        display: 'flex !important',
        flexDirection: 'row !important',
        flexWrap: 'nowrap !important',
        alignItems: 'stretch !important'
      },
      '.slick-slide > div': {
        width: "100%", 
        height: '100%', 
        'object-fit':'fit' 
      }
    },

    cards: {
      marginTop: '90px', 
      marginBottom: '80px',
      padding: '80px 10px',
      'background-color': '#F7F8F7',
    },

    para: {
      marginTop: '90px', 
      marginBottom: '80px',
      padding: '80px' ,
      textAlign: 'justify',
      'background-color': '#F7F8F7',
    },

    image: {
      width: "100%", height: '100%', 'object-fit':'fit'
    }
  };

  return (
    <Container maxWidth="false" disableGutters sx={{ m: 0, p: 0 }}>

  
    

      {/* Slider images */}
      <div style={styles.slider}>
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" style={styles.image} />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" style={styles.image} />
        </div>
      </Slider>
      <br />
      </div>

      {/* About paragraph */} 
      <Typography style={styles.para} variant="body1" gutterBottom>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
      Welcome to Study Genius
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
      Your Ultimate Study Companion
      </Typography><br />
      <p>
      In today's dynamic educational landscape, students often face challenges in navigating through extensive study materials. 
      The abundance of resources, ranging from textbooks to online materials, can be overwhelming to manage effectively. 
      Additionally, students may struggle with retaining and understanding key concepts from their studies, 
      impacting their academic performance.
      </p><br /><p>
        StudyGenius is the ultimate tool for enhancing your learning experience.
        Our specialized question-and-answer generator is tailored for study
        materials, aimed at making learning, teaching, and research more
        efficient and enjoyable.
        </p>
      </Typography>

      {/*how it works? */}
      <Box container style={styles.cards}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        How It Works
      </Typography><br /><br />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        sx={{ height: '100%' }}
        
      >
        <Grid item xs={'auto'}>
          <Card sx={{ maxWidth: 345, height: '100%'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={banner1}
                alt="green iguana"
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Upload Your Study Materials
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Begin by uploading your study materials, whether it's textbooks, lecture notes, or research articles.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={'auto'}>
        <Card sx={{ maxWidth: 345, height: '100%'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={banner1}
                alt="green iguana"
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Input Your Questions or Choose from Suggestions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Next, input your questions directly or select from our suggestions.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={'auto'}>
        <Card sx={{ maxWidth: 345, height: '100%'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={banner1}
                alt="green iguana"
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Generate Personalized Content
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Our advanced algorithms analyze your inputs to generate tailored quizzes, summaries, and explanations.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={'auto'}>
        <Card sx={{ maxWidth: 345, height: '100%'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={banner1}
                alt="green iguana"
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                Enhance Your Learning Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Dive into your customized content to elevate your self-study, revision, exam prep, or lesson planning efforts.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      </Box>

      {/* supporting learning */}
      <Box container style={styles.cards}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        Supports Your Learning Environment
      </Typography>
      <br />
      <Grid
       container
       direction="row"
       justifyContent="space-evenly"
       alignItems="stretch"
       sx={{ height: '100%' }}
      >
        <Grid item xs={3}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Browser Compatibility
        </Typography>
        <Typography variant="body2">
        No need to install any software. Study Genius works seamlessly in your browser, ensuring accessibility across all current operating systems and browsers.
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        No Installation Required
        </Typography>
        <Typography variant="body2">
        Our platform operates in the cloud, eliminating the need for you to download or install any software. Extract pages and access your study materials effortlessly without consuming your system's resources.

        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Security Measures
        </Typography>
        <Typography variant="body2">
        Rest assured that your files and results are secure with Study Genius. We do not store your files on our servers longer than necessary, prioritizing your privacy and security.
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        
      </Grid>
      </Box>

      {/* 3 sample paras */}
      <Typography style={styles.para} variant="body1" gutterBottom>
      Empower Your Learning Journey

At Study Genius, we're committed to empowering students with comprehensive and accessible study aids. By leveraging cutting-edge technology, we bridge the gap between vast information repositories and your individual learning needs. Our objective is to enhance comprehension, retention, and overall academic success by providing tailored responses that cater to diverse learning styles.

      </Typography>
      <Typography style={styles.para} variant="body1" gutterBottom>
      Questions and Answers
      </Typography>
      <Typography style={styles.para} variant="body1" gutterBottom>
      Please rate this app
      </Typography>
      <Typography style={styles.para} variant="body1" gutterBottom>
      Please share this page
      Help our new, cool and free tools to grow!
      Write an article about our tools on your forum, blog or website.
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
