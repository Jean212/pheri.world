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


  margin: 0;
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: relative;

  h2 {
    font-family: Marmelad;
    display: flex;
    justify-content: center;
    margin: 15px;
    margin-top: 25px;

    background-color: #FFF;
    width: 50%;

    color: #ED6C8C;
    font-size: 40px;
    text-shadow: 1px 1px 2px rgba(135,100,184 ,0.5);
  }

  h3 {
    font-family: Marmelad;
  }

  .albumImages {
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      margin: 5px;
      width: 25%;
    }
  }

  .aboutText {
    margin: 20px;
    font-family: Marmelad;
  }

  .songList {
    font-family: Marmelad;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 25px;

    li {
      padding: 5px;
    }
  }

  .distIcon {
    height: 100px;
  }

  .buyOutlet {
    display: flex;
    flex-direction: row;
    margin: 25px;
    margin-top: 10px;

    .outletContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  
  @media only screen
  and (max-width: 790px) 
  and (orientation: portrait) { 
    h2 {
      width: 100%;
    }
  
    .albumImages {
      flex-direction: column;
      img {
        width: 90%;
      }
    }
  }


`