import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Container';
import Templix from './projects/Templix';
import HangMan from './projects/HangMan';


const Projects = () => {
  return(
    <Container 
    maxWidth='xl' 
    sx={{
      backgroundColor: {xs: 'none'},
      }}
      >
      <Grid 
      sx={{ 
        display: 'flex', 
        flexDirection: {
          xs: 'column', 
          md: 'row'
        }, 
        alignItems: 'center', 
        justifyContent: {
          md: 'space-evenly'
          }
        }}
      >
        <Templix/>
        <HangMan/>
      </Grid>
    </Container>
    
  )
};

export default Projects;