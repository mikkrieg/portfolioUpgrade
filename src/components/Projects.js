import React from 'react';
import Container from '@mui/material/Container';
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
      <Templix/>
      <HangMan/>
    </Container>
    
  )
};

export default Projects;