import React from 'react';

// styled-components
import Container from '../styles/News';
import WallFade from '../styles/animations/pageFade';
import Footer from '../styles/Footer';

const News = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">{props.state.view}</h1>
      </WallFade>      
      <h1>PhEri News</h1>
      {/* manual feed update */}
      <div className="constructionDiv">
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
          <p>
            <strong
              className="redirect"
              onClick={()=>{props.changeView('links')}}
            >Click here</strong> to follow us on our social media for more updates!
          </p>
        </div>
      </div>
      
      <Footer>
        <p>Copyright © 2018 PhEri | All Rights Reserved</p>
      </Footer>
    </Container>
  )
}

export default News;