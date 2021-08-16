import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link to="/">
          <Navbar.Brand>&lt; / &gt;</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' />
        <Nav className='me-auto'>
          <Link to="/">
            <Nav.Item>Home</Nav.Item>
          </Link>
          <Link to="/about">
            <Nav.Item>About</Nav.Item>
          </Link>
          <Nav.Item>Get in Touch!</Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}


export default Navigation;