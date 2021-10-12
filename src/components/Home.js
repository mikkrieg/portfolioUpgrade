import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './../sass/components/home.scss';
import JS from './../img/icons8-javascript-50.png'; 
import C from './../img/icons8-c-sharp-logo-50.png';
import R from './../img/icons8-react-native-50.png';
import Redux from './../img/icons8-redux-50.png';
import Templix from './projects/Templix';

const Home = () => {
  return(
    <>
      <h1>Michael Kriegel</h1>
      <h5>Full Stack Developer</h5>
      <div className='text-center'>
        <img src={JS} alt='JavaScript icon'/>
        <img src={C} alt='C sharp icon'/>
        <img src={R} alt='React icon'/>
        <img src={Redux} alt='Redux icon'/>
      </div>
      <h4>Scroll down to check out my projects or click here to learn more about me!</h4>
      <div className='text-center mt-4'>
        <Nav.Link href='/about'><Button variant='outline-dark' size='lg'>Learn More</Button></Nav.Link>
      </div>
      <div className="first-block">
        <div className="project-block">
          <Templix/>
        </div>
      </div>
    </>
  )
}


export default Home;