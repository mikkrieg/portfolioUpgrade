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
    </>
  )
}


export default Footer;


