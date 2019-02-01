import React from 'react';
import Container from '../styles/NavBar';


const NavBar = props => {
  return (
    <Container>
      <div>News</div>
      <div>About</div>
      <div><img src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/PhEri-logover2+(2).png" alt="PhEri Logo" id="pheri-logo-nav"/></div>
      <div>Contact</div>
      <div>Links</div>
    </Container>
  )
}

export default NavBar;