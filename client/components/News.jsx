import React from 'react';

// styled-components
import Container from '../styles/News';
import WallFade from '../styles/animations/pageFade';
import NewsPost from '../styles/NewsPost';

const News = props => {
  return (
    <Container>
      <WallFade></WallFade>
      {/* manual feed update */}
      <NewsPost>

      </NewsPost>
    </Container>
  )
}

export default News;