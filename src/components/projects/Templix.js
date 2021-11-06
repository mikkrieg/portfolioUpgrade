import React, { useEffect } from "react";
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import templix from '../../img/templix.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles(theme => ({
  cards: {
    '&:hover': {
      color: '#000',
    },
  }
}));

const Templix = () => {
  const classes = useStyles();

  useEffect(() => { 
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Grid mt={5}>
      <Grid item>
        <Card 
        data-aos='fade-up'
        sx={{ 
          maxWidth: 345,  
          marginBottom: {xs: 4}
          }}>
          <CardActionArea 
          href='https://templix.netlify.app/'
          target='_blank'
          className={classes.cards}
          >
            <CardMedia
              component="img"
              height="90"
              image={templix}
              alt="templix logo"
            />
            <CardContent>
              <Typography 
              gutterBottom 
              variant="h5" 
              component="div"
              >
                Templix Capstone
              </Typography>
              <Typography 
              variant="body2" 
              color="text.secondary"
              >
                This is a project I constructed for my Epicodus Capstone project. It is a site that provides splash page templates for users to gain inspiration from or use themselves. Built with React, JSX Bootstrap-React and CSS/SCSS. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Templix;