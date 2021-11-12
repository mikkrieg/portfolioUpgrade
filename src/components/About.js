import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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
          marginTop: {xs: 5, md: -4}
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
          marginTop: {xs: -3, md: 13}
        }}
        >
          <Typography
          variant='body1'
          sx={{
            textAlign: { xs: 'center', md: 'left'},
            fontSize: 18
          }}        
          >
            Thanks for taking some time to learn more about me! I am an aspiring Software Developer with a focus on Front-End Development. I am currently looking for work and volunteering with <span><a href='https://bitbybitcoding.org/'>Bit by Bit</a></span> an organization located in Portland, OR. Here I am building coding lessons for middle school aged children. 
          </Typography>
          <Divider
          className='dividers'
          sx={{
            margin: 'auto',
            marginTop: 2,
            marginBottom: 2,
            width: {xs: '50%', md: '30%'},
          }}
          >
          </Divider> 
          <Typography
          variant='body1'
          sx={{
            textAlign: { xs: 'center', md: 'left'},
            fontSize: 18
          }}    
          >
            I studied at Portland Community College(PCC) and completed my Associates of Applied Science in Web Development and Design. I decided to continue my education in software development at Epicodus Coding Bootcamp. Over six months I learned about HTML/CSS, JavaScript, jQuery, C#/.NET, MVC, Entity Framework ORM, Jest testing, React, Redux, CSS frameworks, MySQL, Firebase, API's and coding best practices such as RESTful development and DRY code.
          </Typography>
          <Divider
          className='dividers'
          sx={{
            margin: 'auto',
            marginTop: 1,
            marginBottom: 2,
            width: {xs: '50%', md: '30%'}
          }}
          >
          </Divider>
          <Typography
          variant='body1'
          mb={3}
          sx={{
            textAlign: { xs: 'center', md: 'left'},
            fontSize: 18,
            marginBottom: {xs: 'none', md: 20}
          }}
          >
            After graduating Epicodus I worked as a Front-End intern at <span><a href='https://www.grantusfunding.com/'> Grant Us Funding</a>.</span> Here I worked with React and Redux to create a multi-step form that streamlined the process of adding new funding opportunities to their application. 
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About;