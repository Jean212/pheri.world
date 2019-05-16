import React from 'react';

// styled-components
import Container from '../styles/Links';
import WallFade from '../styles/animations/pageFade';
import SocialMediaList from '../styles/SocialMediaList';
import Footer from '../styles/Footer';

const Links = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">{props.state.view}</h1>
      </WallFade>
      <h1>Links</h1>
      <div className="socialMedia">
        <div>
          <SocialMediaList>
            {/* PhEri */}
            <div className="socialMediaName"><h3>PhEri</h3></div>

            <div><strong>Latest News on PhEri on Facebook</strong></div>
            <div className="socialMediaButton fbButton">
              <a href="https://fb.me/pheridol" 
              target="blank"
              >Facebook</a>
            </div>
            <div><strong>PhEri's YouTube Channel</strong></div>
            <div className="socialMediaButton ytButton">
              <a href="https://www.youtube.com/channel/UCEPSke4xQfETNcpMqdEeJDA" 
              target="blank"
              >YouTube</a>
            </div>
            <div><strong>@PhEri_Official on Instagram</strong></div>
            <div className="socialMediaButton igButton">
              <a href="https://instagram.com/pheri_official/" 
              target="blank"
              >Instagram</a>
            </div>
            <div><strong>PhEri on Apple Music</strong></div>
            <div className="socialMediaButton amButton">
              <a href="https://itunes.apple.com/us/artist/pheri/1444687668" 
              target="blank"
              >Apple Music</a>
            </div>
            <div><strong>PhEri Dust on Amazon Music</strong></div>
            <div className="socialMediaButton azButton">
              <a href="https://www.amazon.com/dp/B07KWFNNHG" 
              target="blank"
              >Amazon Music</a>
            </div>

            {/* Phoebe */}
            <div className="socialMediaName"><h3>Feebeechanchibi</h3></div>
            
            <div><strong>Feebeechanchibi's YouTube Channel</strong></div>
            <div className="socialMediaButton ytButton">
              <a href="https://www.youtube.com/feebeechanchibi" 
              target="blank"
              >YouTube</a>
            </div>
            <div><strong>Feebeechanchibi on Facebook</strong></div>
            <div className="socialMediaButton fbButton">
              <a href="https://fb.me/feebeechanchibi" 
              target="blank"
              >Facebook</a>
            </div>
            <div><strong>@Feebeechanchibi's Twitter</strong></div>
            <div className="socialMediaButton twButton">
              <a href="https://twitter.com/feebeechanchibi" 
              target="blank"
              >Twitter</a>
            </div>
            <div><strong>@Feebeechanchibi Instagram Feed</strong></div>
            <div className="socialMediaButton igButton">
              <a href="https://www.instagram.com/feebeechanchibi/" 
              target="blank"
              >Instagram</a>
            </div>

            {/* Eri */}
            <div className="socialMediaName"><h3>Eri Rin</h3></div>
            
            <div><strong>@EriEri_Rin Instagram Feed</strong></div>
            <div className="socialMediaButton igButton">
              <a href="https://www.instagram.com/erieri_rin/" 
              target="blank"
              >Instagram</a>
            </div>
            <div><strong>@EriRin_PhEri's Twitter</strong></div>
            <div className="socialMediaButton twButton">
              <a href="https://twitter.com/EriRin_PhEri" 
              target="blank"
              >Twitter</a>
            </div>

          {/* End Social Media List */}
          </SocialMediaList>
        </div>
      </div>

      <Footer>
        <p>Copyright © 2019 PhEri | All Rights Reserved </p>
      </Footer>
    </Container>
  )
}

export default Links;
