import React from 'react';

// styled-components
import Container from '../styles/music-section/PheriDust';
import WallFade from '../styles/animations/pageFade';
import Footer from '../styles/Footer'

const Links = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">Pheri Dust</h1>
      </WallFade>
      <h2>PhEri Dust</h2>

      <div className="albumImages">
        <img src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/music-section/pheridust.jpg" alt="pheri-dust-front"/>
        <img src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/music-section/pheridustb.jpg" alt="pheri-dust-back"/>
      </div>

      {/* Song List */}
      <ul className="songList">
        <strong>Single</strong>
        <li>01 PhEri Dist</li>
        <li>02 PhEri Dust (Starring Phoebe)</li>
        <li>03 PhEri Dust (Starring Eri)</li>
      </ul>

      {/* Outlets */}
      <h3>Buy it digitally:</h3>
      <div className="buyOutlet">
        <div className="outletContainer">
          <h3>Apple Music</h3>
          <a 
            href="https://itunes.apple.com/us/album/pheri-dust-single/1444687667" 
            target="blank">
          <img 
            className="distIcon"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/music/content-link-apple-music-app_2x.png" 
            alt="Also on Amazon Music"/>
          </a>
        </div>
        <div className="outletContainer">
          <h3>Amazon Music</h3>
          <a 
            href="https://www.amazon.com/dp/B07KWFNNHG/ref=cm_sw_r_tw_dp_U_x_HeVMCb1F1Z8Q1" 
            target="blank">
          <img 
            className="distIcon"
            src="https://images-na.ssl-images-amazon.com/images/I/61TJ5QAsPjL.png" 
            alt="Also on Amazon Music"/>
          </a>
        </div>
      </div>
      <h3>Preview on Apple Music:</h3>
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
      <Footer>
          <p>Copyright © 2018 PhEri | All Rights Reserved </p>
      </Footer>
    </Container>
  )
}

export default Links;