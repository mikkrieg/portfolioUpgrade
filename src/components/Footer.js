import React from 'react';
import './../sass/components/footer.scss';
import { makeStyles } from '@mui/styles';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles(theme => ({
  icons: {
    width: '20%',
    margin: 10,
  }
}));

const Footer = () => {
  const classes = useStyles();
  return(
    <>
    <footer>&copy;2021 Michael Kriegel</footer>
    <Grid 
    direction='row'
    >
      <Grid item xs={4}>
        <a href="https://www.linkedin.com/in/michael-kriegel/" rel='noreferrer' target="_blank">
          <img className={classes.icons} src={linkedin} alt="linkedIn icon"/>
        </a>
      </Grid>
      <Grid item xs={4}> 
        <a href="https://github.com/mikkrieg?tab=repositories" rel='noreferrer' target="_blank">
          <img className={classes.icons} src={github} alt="Github icon"/>
        </a> 
      </Grid>
    </Grid>
    </>
  )
}


export default Footer;


