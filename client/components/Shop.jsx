import React from 'react';

// styled-components
import Container from '../styles/Shop';
import WallFade from '../styles/animations/pageFade';
import Footer from '../styles/Footer';
import Construction from '../styles/Construction';
import SocialMediaList from '../styles/SocialMediaList';

const Shop = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">{props.state.view}</h1>
      </WallFade>
      {/* About Section */}
      <div className="aboutSection about">
        <h1>Merchandise</h1>
        <div className="merchContainer">
          <img 
            className="merch"
            src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/PhEriDustCD.jpg" 
            alt="merchandise"
            />
        </div>
      </div>
      
      <Construction>
        <div className="constructionText">
          <h2>Sorry... Under Construction!</h2>
        </div>
        <div className="constructionImgDiv">
          <img 
            src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/construction/constructionpheri.png" 
            alt="Construction Pheri"
            className="constructionImg"
            title="(C)2019 CHARAT"/>
        </div>
        <div className="constructionText">
          <p> Please contact us at <strong className="redirect">Contact@Pheri.World</strong> if you're interested in buying merchandise!
          </p>
        </div>
        <div className="constructionText">
          <p>Music is available is also available through Apple Music and Amazon Music digitally</p>
        </div>

        <SocialMediaList>
          <div><strong>PhEri on Apple Music</strong></div>
          <div className="socialMediaButton amButton" style={{background: 'linear-gradient(#F27121, #E94057, #8A2387)'}}>
            <a href="https://itunes.apple.com/us/artist/pheri/1444687668" 
            target="blank"
            >Apple Music</a>
          </div>
          <div><strong>PhEri Dust on Amazon Music</strong></div>
          <div className="socialMediaButton azButton">
            <a href="https://www.amazon.com/dp/B07KWFNNHG/ref=cm_sw_r_tw_dp_U_x_HeVMCb1F1Z8Q1" 
            target="blank"
            >Amazon Music</a>
          </div>
        </SocialMediaList>
        
      </Construction>
      <Footer>
        <p>Copyright © 2018 PhEri | All Rights Reserved</p>
      </Footer>
    </Container>
  )
}

export default Shop;