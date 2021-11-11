import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/button';
import { AppContext } from '../AppContext';
import '../sass/components/navbar.scss';
import img from './../img/icons8-stingray-50.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { open, setOpen } = useContext(AppContext);

  const handleClick = () => {
    setClick(!click);
    if(click === false) {
      console.log('inside')
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  const returnScroll = () => {
    document.body.classList.remove('no-scroll');
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
    if(window.innerWidth <= 960) {
      window.open('mailto:mikkrieg@gmail.com')
    } else {
      setOpen(true);
    }
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
              <Link to='/' className='nav-links' onClick={function(e){closeMobileMenu(); returnScroll();}}>
                Home
              </Link>
            </li>
            <li className='nav-item by-btn'>
              <Link to='/about' className='nav-links' onClick={function(e){closeMobileMenu(); returnScroll();}}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Button className='modal-btn'variant='outline-light' onClick={openModal} >Get in Touch!</Button>
            </li>
            <li className='nav-item'>
              <a href='https://github.com/mikkrieg'>
                <i className="fab fa-github-square menu-icon"></i>
              </a>
              <a href='https://www.linkedin.com/in/michael-kriegel/'>
                <i className="fab fa-linkedin menu-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;


