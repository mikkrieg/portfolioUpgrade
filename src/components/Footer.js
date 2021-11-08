import React from 'react';
import './../sass/components/footer.scss';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return(
    <>
    <Grid>
      <Grid 
      item 
      sx={{
        marginTop: {md: 20}
      }}
      >
        <footer>&copy;2021 Michael Kriegel</footer>
      </Grid>
    </Grid>
    </>
  )
}


export default Footer;


