import React from 'react';

// styled-components
import Container from '../styles/Links';
import WallFade from '../styles/animations/pageFade';

const Links = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">{props.state.view}</h1>
      </WallFade>
      <h1>Links</h1>
      <h3>Apple Music:</h3>
      <div>
        <iframe 
        allow="autoplay *; encrypted-media *;" 
        frameBorder="0" 
        height="450" 
        style={{
          width:'100%',
          maxWidth:'660px',
          overflow:'hidden',
          background:'transparent'
        }}
        src="https://embed.music.apple.com/us/album/pheri-dust-single/1444687667"></iframe>
      </div>
      <div>
        <h3>Amazon Music:</h3>
        <a 
          href="https://www.amazon.com/dp/B07KWFNNHG/ref=cm_sw_r_tw_dp_U_x_HeVMCb1F1Z8Q1" 
          target="blank">
        <img 
          src="https://images-na.ssl-images-amazon.com/images/I/61TJ5QAsPjL.png" 
          id="amazonMusicIcon"
          alt="Also on Amazon Music"/>
        </a>
      </div>
    </Container>
  )
}

export default Links;