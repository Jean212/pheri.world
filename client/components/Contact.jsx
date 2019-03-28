import React from 'react';

// styled-components
import Container from '../styles/Contact';
import WallFade from '../styles/animations/pageFade';

const Contact = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">{props.state.view}</h1>
      </WallFade>
      {/* About Section */}
      <div className="contactSection">
        <h1>Contact PhEri:</h1>
        <div>
          <p className="contactText">
          Booking, merchandise, and general inquiry
          </p>
        </div>
        <div>
          <strong className="contactEmail">
          contact@pheri.world
          </strong>
        </div>
      </div>
      
    </Container>
  )
}

export default Contact;