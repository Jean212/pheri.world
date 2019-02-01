import React from 'react';
import NavBar from './NavBar'

//React Components
import Intro from './Intro.jsx';

//styled-components
import Container from '../styles/Home'

const Home = props => {
  return (
    <Container>
      <Intro />
    </Container>
  )
}

export default Home;