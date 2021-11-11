import React, { useState, useContext, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import { AppContext } from '../AppContext';
import '../sass/components/DesktopModal.scss';

const useStyles = makeStyles(theme => ({
  modalIcons: {
    color: '#000',
    display: 'inline-block',
    margin: 'auto'
  }
}));

const DesktopModal = () => {
  const { open, setOpen } = useContext(AppContext);

  const classes = useStyles();

  let width;
  let height;

  const modalSize = () => {
    width = window.innerWidth / 2;
    height = window.innerHeight / 2;
  }

  setInterval(modalSize(), 100);
  
  const handleClose = () => setOpen(false);
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
        width: {width},
        height: {height},
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="transition-modal-title" variant="h3" component="h2" sx={{ textAlign: 'center' }}>
          Get In Touch! 
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <a href='https://github.com/mikkrieg' className={classes.modalIcons}>
            <i className="fab fa-github-square modal-icon" id='foot-git'></i>
          </a>
          <a href='https://www.linkedin.com/in/michael-kriegel/' className={classes.modalIcons}>
            <i className="fab fa-linkedin modal-icon" id='foot-link'></i>
          </a>
      </Box>
    </Fade>
  </Modal>
  )
}

export default DesktopModal;