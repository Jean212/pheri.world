import styled from 'styled-components';

export default styled.div`
  * {
    margin: 0;
    padding: 0;
  }

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
    margin-bottom: 20px;
    font-family: Marmelad;
    color: #E0669B;
    text-shadow: 1px 1px 2px rgba(135,100,184 ,0.75);
  }

  #artistList {
    list-style-type: none;
    display: flex;
    flex-direction: row;

    li {
      margin: 2.5px;
      padding: 5px;
      border-radius: 10%;
      background-color: #FAB9C9;
      color: #FFF;
      text-shadow: 1px 1px 2px rgba(135,100,184 ,0.75);
      font-family: Marmelad;
      font-size: 20px;
      box-shadow: 1px 1px 2px rgba(135,100,184 ,0.75);

      :hover{
        cursor: pointer;
        border-radius: 5px;
        background-color: pink;
        opacity: 0.95;

      :active { 
        text-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
        box-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
      }
    }
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
  
  .footerNone {
    display: none;
  }
  @media only screen
  and (max-width: 790px) 
  and (orientation: portrait) { 
  }


`