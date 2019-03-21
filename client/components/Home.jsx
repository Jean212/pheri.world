import React from 'react';

//React Components
import Intro from './Intro.jsx';

//styled-components
import Container from '../styles/Home'
import WallFade from '../styles/animations/pageFade';

const Home = props => {
  return (
    <Container>
      <WallFade></WallFade>
      <Intro />
    </Container>
  )
}

export default Home;