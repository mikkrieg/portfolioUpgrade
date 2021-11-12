import React, { useEffect } from "react";
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import LazyLoad from 'react-lazy-load';
import Grid from '@mui/material/Grid';
import hangmanIMG from '../../img/hangman.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles(theme => ({
  cards: {
    '&:hover': {
      color: '#000',
    },
  }
}));

const HangMan = () => {

  const classes = useStyles();

  useEffect(() => { 
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Grid mt={5}>
      <Grid 
        item
        sx={{ display: 'flex'}}
        direction='row'
      >
        <Card 
        data-aos='fade-up'
        sx={{ 
          maxWidth: 345,  
          marginBottom: {xs: 3, md: 0},
          }}>
          <CardActionArea 
          href='https://redux-hangman.netlify.app/'
          target='_blank'
          className={classes.cards}
          >
            <LazyLoad>
              <CardMedia
                component="img"
                sx={{ height: {xs: '100px', md: '90px'}}}
                image={hangmanIMG}
                alt="templix logo"
              />
            </LazyLoad>
            <CardContent>
              <Typography 
              gutterBottom 
              variant="h5" 
              component="div"
              >
                Hangman Team Project
              </Typography>
              <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ fontSize: { md: '1.05em'}}}
              >
                This is a application is a slightly modified version of the classic hangman game that I built alongside a team of peers. Fully playable and hosted on Netlify. This project was built with React, Redux, Material UI and custom CSS. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HangMan;