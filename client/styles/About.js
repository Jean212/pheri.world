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
  }

  .aboutSection{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .aboutChibiContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .aboutText {
    margin: 10px;
    font-family: Marmelad;
  }
  
  @media only screen
  and (max-width: 790px) 
  and (orientation: portrait) { 
    .aboutChibiContainer {
      img {
        width: 50%;
      }
    }
  }


`