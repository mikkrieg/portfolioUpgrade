import React from 'react';
import './../sass/components/footer.scss';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(theme => ({
  footerIcons: {
    // backgroundColor: '#000',
    color: '#FFF',
    display: 'inline-block',
    margin: 'auto'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return(
    <>
    <Grid>
      <Grid 
      item 
      sx={{
        marginTop: {md: 5}
      }}
      >
        <footer>&copy;2021 Michael Kriegel</footer>
        <Grid 
        item
        sx={{
          display: 'flex',
        }}
        >
          <a href='https://github.com/mikkrieg' className={classes.footerIcons}>
            <i className="fab fa-github-square footer-icon" id='foot-git'></i>
          </a>
          <a href='https://www.linkedin.com/in/michael-kriegel/' className={classes.footerIcons}>
            <i className="fab fa-linkedin footer-icon" id='foot-link'></i>
          </a>
          <a href='mailto:mikkrieg@gmail.com' className={classes.footerIcons}>
            <i className="fas fa-envelope-square footer-icon" id='foot-mail'></i>
          </a>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}


export default Footer;


