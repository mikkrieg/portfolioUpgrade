import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/button';
import { AppContext } from '../AppContext';
import '../sass/components/navbar.scss';
import img from './../img/icons8-stingray-50.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if(click === false) {
      console.log('inside')
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
  
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  const openModal = () => {
    return "Hekllo"
  }

  window.addEventListener('resize', showButton);

  return (
    <>  
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img src={img} alt='stingray icon'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item by-btn'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Button className='modal-btn'variant='outline-light' onClick={openModal} >Get in Touch!</Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;


