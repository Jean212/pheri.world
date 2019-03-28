import React from 'react';

// styled-components
import Container from '../styles/News';
import WallFade from '../styles/animations/pageFade';
import NewsPost from '../styles/NewsPost';


const News = props => {
  return (
    <Container>
      <WallFade>
        <h1 className="transitionText">{props.state.view}</h1>
      </WallFade>      
      <h1>Pheri News</h1>
      {/* manual feed update */}
      <NewsPost>
        <div className="news-info">
          <h3>Pheri is performing at Ani-Fest 2019!</h3>        
        </div>
        <img 
          className="news-image"
          src="https://s3-us-west-1.amazonaws.com/pheriworld/graphics/pherianifest.jpg" 
          alt="pheri at anifest"
        />
        <div className="news-info">
          
          <a href="https://www.facebook.com/anifestival/photos/a.2016527401920728/2235375873369212/">Click here for more Info</a>
        </div>
      </NewsPost>
      
    </Container>
  )
}

export default News;