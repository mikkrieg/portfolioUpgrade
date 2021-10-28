import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../sass/components/home.scss';
import JS from './../img/icons8-javascript-50.png'; 
import C from './../img/icons8-c-sharp-logo-50.png';
import R from './../img/icons8-react-native-50.png';
import Redux from './../img/icons8-redux-50.png';
// import Templix from './projects/Templix';
import img from './../img/icons8-down-arrow-64.png';

const theme = createTheme({
  palette: {
    outlinedButtons : {
      main: '#000',
      constrastText: '#fff'
    }
  }
  
})

const Home = () => {
  const [hideArrow, setHideArrow] = useState(false);

  const removeArrow = () => {
    if(window.scrollY > 100) {
      setHideArrow(true);
    }
  }

  window.addEventListener('scroll', removeArrow);
  return(
    <>
      <Container maxWidth='sm'>
        <Grid container>
          <Grid item xs={12} mt={15}>
            <Typography variant='h2' align='center'>
              Michael Kriegel
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' align='center'>
              Full Stack Developer
            </Typography>
          </Grid>
          <Grid item xs={8} md={12} sx={{ marginLeft: 9 }}>
            <img src={JS} alt='JavaScript icon'/>
            <img src={C} alt='C sharp icon'/>
            <img src={R} alt='React icon'/>
            <img src={Redux} alt='Redux icon'/>
          </Grid>
          <Grid item>
            <Typography variant='h4' align='center' sx={{ display: {xs: 'none', sm: 'none', md: 'block'}}}>
              Scroll down to check out my projects or click here to learn more about me!
            </Typography>
          </Grid>
          <Grid item xs={12} align='center' mt={2}>
            <ThemeProvider theme={theme}>
              <Button component={Link} color='outlinedButtons' to='/about' variant='outlined' sx={{ color: '#000'}}>Learn More!</Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={1} mt={10}>
            <img src={img} alt='down arrow' className={hideArrow ? 'hide-arrow' : 'scroll-arrow'}/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Container>
    </>
  )
}


export default Home;