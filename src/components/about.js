import React from 'react'
import { Container, Typography, Button, Card, CardMedia, CardContent, CardActionArea, Grid,  } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/images/sample.jpeg';



export default function About(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Welcome to StudyGenius
      </Typography>
      <Slider {...settings}>
        <div>
        <img src={banner1} alt="Banner 1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="/banner2.jpg" alt="Banner 2" style={{ width: '100%' }} />
        </div>
      </Slider>
      <Typography variant="body1" gutterBottom>
        StudyGenius is the ultimate tool for enhancing your learning experience. Our specialized question-and-answer
        generator is tailored for study materials, aimed at making learning, teaching, and research more efficient and
        enjoyable.
      </Typography>
      <Grid container  
  direction="row"
  justifyContent="space-evenly"
  alignItems="stretch">
        <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={banner1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={banner1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={banner1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
      <Typography variant="body1" gutterBottom>
        With StudyGenius, you can transform your textbooks, lecture notes, research articles, and technical documents
        into personalized quizzes, summaries, and explanations. Our platform is designed to be scalable, so you can
        access it anytime, anywhere, and on any device.
      </Typography>
      <Typography variant="body1" gutterBottom>
        At StudyGenius, we prioritize user experience and innovation. While we focus on text-based study materials, we
        continuously strive to improve our platform and expand our offerings.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Join us on this journey of learning and discovery. Let StudyGenius empower you to achieve your academic and
        professional goals.
      </Typography>
      <a href="/signup">
        <Button variant="contained" sx={{ mt: 4 }}>
          Get Started
        </Button>
      </a>
    </Container>
  )
}


