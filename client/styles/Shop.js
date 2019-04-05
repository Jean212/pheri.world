import styled from 'styled-components';

export default styled.div`
  background-color: #FFF;

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
    text-shadow: 1px 1px 2px rgba(135,100,184 ,0.75);
  }

  .aboutSection{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .merchContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
    }
  }

  .aboutText {
    margin: 10px;
    font-family: Marmelad;
  }

  <-- Temp Music Outlet Plug *-->
  
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

  @media only screen
  and (max-width: 790px) 
  and (orientation: portrait) { 
    .merchContainer {
      img {
        width: 100%;
      }
    }
  }


`