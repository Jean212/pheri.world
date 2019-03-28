import React from 'react';

// styled-components
import Container from '../styles/About';
import WallFade from '../styles/animations/pageFade';

const About = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">{props.state.view}</h1>
      </WallFade>
      {/* About Section */}
      <div className="aboutSection about">
        <h1>About PhEri</h1>
        <div className="aboutChibiContainer">
          <img 
            className="chibi"
            src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/chibi/phoebechibi02.png" 
            alt="Chibi Phoebe"
            />
          <img 
            className="chibi"
            src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/chibi/erichibi02.png" 
            alt="Chibi Eri"
            />
        </div>
        <div>
          <p className="aboutText">
          Comprised of the duo of Phoebe and Eririn, PhEri seeks to bring out the melodies and courage from their hearts to enchant audiences with rainbow colored songs and charming dances!
          </p>
        </div>
      </div>
      
    </Container>
  )
}

export default About;