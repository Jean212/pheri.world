import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  pointer-events:auto;
  
  flex-direction: column;
  align-items: center;


  font-family: Marmelad;

  .news-image {
    width: 50%;
  }

  .news-info {
    background-color: #FFF;
    width: 50%;
  }

  
  @media only screen
  and (max-width: 790px) 
  and (orientation: portrait) { 
    .news-image {
      width: 100%;
    }
  
    .news-info {
      background-color: #333;
      width: 100%;
    }
  }
`