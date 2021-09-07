import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../sass/components/navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <>
    <Navbar bg='dark' variant='dark' fixed="top">
      <Container>
      <Navbar.Brand className='brand' href='/'>&lt;/&gt;</Navbar.Brand>
      <div className='justify-content-end'>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link>Get in Touch!</Nav.Link>
        </Nav>
      </div>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation;
