import React, { useState, useContext, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { makeStyles } from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel'; 
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AppContext } from '../AppContext';
import '../sass/components/DesktopModal.scss';

const useStyles = makeStyles(theme => ({
  modalIcons: {
    color: '#000',
    width: '10%',
    fontSize: 120,
    '&:hover': {
      color: '#1A1A1A'
    }
  }
}));




const DesktopModal = () => {
  const { open, setOpen } = useContext(AppContext);

  const classes = useStyles();
  
  const handleClose = () => setOpen(false);
  const hideModal = () => {
    if(window.innerWidth < 960) {
      setOpen(false);
    }
  }
  window.onresize = hideModal;

  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="transition-modal-title" variant="h2" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Get in Touch
        </Typography>
        <Typography 
          variant='h6' 
          sx={{ 
            textAlign: 'center', 
            width: '80%', 
            margin: 'auto'}}
          >
          Shoot me an email at mikkrieg@gmail.com or connect with me on these platforms
        </Typography>
        <Grid 
          sx={{ 
            display: 'flex'
            }}
          >
          <Grid 
            item 
            md={4} 
            sx={{
              marginLeft: {
                sm: '2%', 
                md:'5%', 
                lg:'8%', 
                xl: '10%'
                }}}
            >
            <a href='mailto:mikkrieg@gmail.com' className={classes.modalIcons}>
              <i class="fas fa-envelope-square modal-icon"></i>
            </a>
          </Grid>
          <Grid 
            item 
            md={4} 
            sx={{
              marginLeft: {
                sm: '2%', 
                md:'5%', 
                lg:'8%', 
                xl: '10%'
              }}}
          >
            <a href='https://github.com/mikkrieg' className={classes.modalIcons} target='_blank' rel='noreferrer'>
              <i className="fab fa-github-square modal-icon"></i>
            </a>
          </Grid>
          <Grid 
            item 
            md={4} 
            sx={{
              marginLeft: {
              sm: '2%', 
              md:'5%', 
              lg:'8%', 
              xl: '10%'
            }}}
          >
            <a href='https://www.linkedin.com/in/michael-kriegel/' className={classes.modalIcons} target='_blank' rel='noreferrer'>
              <i className="fab fa-linkedin modal-icon"></i>
            </a>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  </Modal>
  )
}

export default DesktopModal;