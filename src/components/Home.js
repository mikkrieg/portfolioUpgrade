import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './../sass/components/home.scss';
import JS from './../img/icons8-javascript-50.png'; 
import C from './../img/icons8-c-sharp-logo-50.png';
import R from './../img/icons8-react-native-50.png';
import Redux from './../img/icons8-redux-50.png';
import Templix from './projects/Templix';
import img from './../img/icons8-down-arrow-64.png';

const Home = () => {
  const [showP, setShowP] = useState(false);

  const showParagraph = () => {
    if(window.innerWidth <= 960) {
      setShowP(false);
    } else {
      setShowP(true);
    }
  }

  window.addEventListener('resize', showParagraph);
  return(
    <>
      <Container>
        <div className="home-div">
          <h1>Michael Kriegel</h1>
          <h5>Full Stack Developer</h5>
          <div className='text-center'>
            <img src={JS} alt='JavaScript icon'/>
            <img src={C} alt='C sharp icon'/>
            <img src={R} alt='React icon'/>
            <img src={Redux} alt='Redux icon'/>
          </div>
          <h4 className='desktop-p'>Scroll down to check out my projects or click here to learn more about me!</h4>
          <div className='text-center mt-4'>
            <Nav.Link href='/about'><Button variant='outline-dark' size='lg'>Learn More</Button></Nav.Link>
          </div>
        </div>
        <img src={img} alt='down arrow' className='scroll-arrow'/>
      </Container>
      <div className="first-block">
        <div className="project-block">
          <Templix/>
        </div>
      </div>
    </>
  )
}


export default Home;