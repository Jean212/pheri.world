import React from 'react';

//styled-components
import Container from '../styles/pw-intro/Pw-Intro';
import Welcome from '../styles/pw-intro/Welcome';
import To from '../styles/pw-intro/To';
import Pheri from '../styles/pw-intro/Pheri';
import World from '../styles/pw-intro/World';

const Intro = props => {
  return (
  <Container>
    <Welcome><h1>Welcome</h1></Welcome>
    <To><h1>to</h1></To>
    <Pheri><h1>PhEri</h1></Pheri>
    <World><h1>World</h1></World>
  </Container>
  )
}

export default Intro;