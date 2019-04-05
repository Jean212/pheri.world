import styled from 'styled-components';

export default styled.div`
  background-image: url('https://s3-us-west-1.amazonaws.com/pheriworld/bg/news-bg.JPG');

  margin: 0;
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: relative;

  /* Full height */
  height: 100vh; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Content */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


  overflow-y:auto;
  overflow-x:hidden; 

  h1 {
    margin-top: 100px;
    font-family: Marmelad;
    color: #E0669B;
    text-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
  }

  .constructionText {
    font-family: Marmelad;
    display: flex;
    justify-content: center;
    margin: 15px;
    margin-top: 25px;

    color: #333;
    text-shadow: 2px 2px 4px #000;

    h2 {
      font-size: 32px;
    }

    background-color: #FFF;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 10px;
  }

  .constructionDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .constructionImgDiv {
    .constructionImg {
      width: 100%;
    }
  }

  .redirect {
    color: #FF69B4;
    text-shadow: 1.5px 1.5px 5px rgba(135,100,184 ,0.75);
    :hover {
      cursor: pointer;
      color: #FF1493;
    }
  }

  @media only screen
  and (max-width: 790px) 
  and (orientation: portrait) { 
    h2 {
      font-size: 28px;
    }
  }

`