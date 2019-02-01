import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Sofia', cursive;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;	
      background-image: url(https://s3-us-west-1.amazonaws.com/pheriworld/bg/drops.jpg);
      background-size: auto;
      background-attachment: unset;
      background-position: 0%;

      font-size: 160px;
      font-weight: bold;

      @media only screen and (max-height: 1400px) {
        font-size: 120px;
      }

      @media only screen and (max-height: 900px) {
        font-size: 80px;
      }
      
      

      animation: bg-move infinite 30s;
      animation-fill-mode: forwards;
      animation-play-state: running;
      animation-timing-function: linear;
      text-align: center;
    
    @keyframes bg-move {
      0% {
        background-position: 0%;	
      }
      50% {
        background-position: 100%;	
      }
      100% {
        background-position: 0%;
      }
    }
  }
`