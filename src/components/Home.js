import React from 'react';
import Button from 'react-bootstrap/Button';
import './../sass/components/home.scss';

const Home = () => {
  return(
    <>
      <body>
        <h1>Michael Kriegel</h1>
        <h5>Full Stack Developer</h5>
        <h4>Scroll down to check out my projects or click here to learn more about me!</h4>
        <div className='text-center mt-4'>
          <Button variant='outline-dark' size='lg'>Learn More</Button>
        </div>
      </body>
    </>
  )
}


export default Home;