import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { makeStyles} from '@mui/styles';
import '../sass/components/home.scss';
import DesktopModal from './DesktopModal';
import JS from './../img/icons8-javascript-50.png'; 
import C from './../img/icons8-c-sharp-logo-50.png';
import R from './../img/icons8-react-native-50.png';
import Redux from './../img/icons8-redux-50.png';
import Projects from './Projects';
import img from './../img/icons8-down-arrow-64.png';

const useStyles = makeStyles((theme) => ({
  homeButton: {
    color: '#000',
    border: 'solid 1px #000 !important',
    '&:hover': {
      cursor: 'pointer',
      color: '#000',  
      backgroundColor: 'rgba(0, 0, 0, .08)',
    }
  },
}));

const Home = () => {
  const [hideArrow, setHideArrow] = useState(false);

  const classes = useStyles();

  const removeArrow = () => {
    if(window.scrollY > 70) {
      setHideArrow(true);
    } else {
      setHideArrow(false);
    }
  } 

  window.addEventListener('scroll', removeArrow);

  return(
    <>
      <Container maxWidth='sm'>
        <Grid 
        container
        alignItems='center'
        justifyContent='center'
        direction='column'
        >
          <Grid 
          item 
          xs={12} 
          sx={{ marginTop: {xs: 11, md: 12, xl: 15} }}
          >
            <Typography variant='h2' align='center'>
              Michael Kriegel
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' align='center'>
              Full Stack Developer
            </Typography>
          </Grid>
          <Grid item xs={8} md={12}>
            <img src={JS} alt='JavaScript icon'/>
            <img src={C} alt='C sharp icon'/>
            <img src={R} alt='React icon'/>
            <img src={Redux} alt='Redux icon'/>
          </Grid>
          <Grid item>
            <Typography 
              variant='p' 
              align='center' 
              sx={{ 
                display: {xs: 'none', sm: 'none', md: 'block'}, 
                fontSize: 23, 
                marginTop: 4,
                marginBottom: 1,
                }}>
              Check out my projects below or learn more about me!
            </Typography>
          </Grid>
          <Grid item xs={12} align='center' mt={2}>
              <Button 
                className={classes.homeButton}
                component={Link}  
                to='/about' 
                variant='outlined'
                size='large' 
                sx={{ color: '#000'}}>
                  Learn More!
              </Button>
          </Grid>
        </Grid>
        <Grid 
          item 
          xs={1} 
          mt={5} 
          sx={{ 
            display: { 
              md: 'none'
            }
          }}
        >
          <img 
          src={img} 
          alt='down arrow' 
          id='scroll-arrow' 
          className={hideArrow ? 'hide-arrow' : 'reveal-arrow'}
          />
        </Grid>
      </Container>
      <DesktopModal/>
      <Projects/>
    </>
  )
}


export default Home;