import styled from 'styled-components';

export default styled.div`
  background-image: url('https://s3-us-west-1.amazonaws.com/pheriworld/bg/news-bg.JPG');

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

  margin: 0;
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: relative;
`