import styled from 'styled-components';

export default styled.div`
  background-image: url('https://s3-us-west-1.amazonaws.com/pheriworld/bg/links-bg2.jpg');


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

  margin: 0;
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: relative;

  h1 {
    margin-top: 100px;
    font-family: Marmelad;
    color: #E0669B;
    text-shadow: 2px 2px 5px rgba(255, 255, 255 ,0.75);
  }

  .socialMediaList{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .socialMedia {
    display: flex;
    justify-content: center;
  }

  .contactText {
    font-family: Marmelad;
  }
  
  .contactEmail {
    font-family: Marmelad;
    font-size: 28px;
    text-decoration: underline;
    text-shadow: 1px 1px 5px #FFF;
  }

  
  .fbButton {
    background-color: #3b5998;
  }

  .twButton {
    background-color #55acee;
  }

  .fbButton {
    background-color: #3b5998;
  }
  
  .ytButton {
    background-color: #b31217;
  }

  .igButton {
    background-color: #517fa4;
  }

  .amButton {
    background: #8A2387;  /* fallback for old browsers */
    background: -webkit-linear-gradient(t#F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(#F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .azButton {
    background: #4e54c8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(#8f94fb, #4e54c8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(#8f94fb, #4e54c8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`