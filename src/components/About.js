import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Michael from '../img/me.jpeg';
import '../sass/components/about.scss';

const About = () => {
  return(
    <Container maxWidth='lg'>
      <Grid
      container
      spacing={5}
      direction='row'
      justifyContent='center'
      alignItems='center'
      >
        <Grid 
        item 
        xs={12}
        md={6} 
        sx={{
          width: '100%',
          marginTop: {xs: 5}
        }}
        >
          <img 
          id='creator-image' 
          src={Michael} 
          alt='Michael sitting by a fire'
          />
        </Grid>
        <Grid 
        item 
        xs={12} 
        md={6}
        sx={{
          marginTop: {xs: -3}
        }}
        >
          <Typography
          variant='body1'
          sx={{
            textAlign: { xs: 'center', md: 'left'},
            fontSize: 18
          }}        
          >
            Thanks for taking some time to learn more about me! I am an aspiring Software Developer with a focus on Front-End Development. This project is my capstone for Epicodus Coding Bootcamp.
          </Typography>
          <br/>    
          <Typography
          variant='body1'
          sx={{
            textAlign: { xs: 'center', md: 'left'},
            fontSize: 18
          }}    
          >
            I studied at Portland Community College(PCC) for two years. After completing my education at PCC and recieving and Associates of Applied Science in Web Development and Design, I decided to continue my education in software development at Epicodus Coding Bootcamp. Over six months I learned about HTML/CSS, JavaScript, jQuery, C#/.NET, MVC, Entity Framework ORM, Jest testing, React, Redux, Styled Components, Bootstrap, React-Bootstrap, MySQL, Firebase, API's and coding best practices.
          </Typography>
          <br/>
          <Typography
          variant='body1'
          mb={5}
          sx={{
            textAlign: { xs: 'center', md: 'left'},
            fontSize: 18
          }}
          >
          Upon graduating Epicodus, I would like begin a career in Front-End Development. This website was built with React, JSX, CSS, SCSS and React-Bootstrap
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About;