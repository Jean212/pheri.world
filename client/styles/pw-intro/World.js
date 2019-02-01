import styled from 'styled-components';

export default styled.div`

  display: flex;
  justify-content: center;

  background-repeat: no-repeat;
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes drop-item-world {
    0% {
      transform: translateY(-150px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes drop-item-world {
    0% {
      transform: translateY(-150px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  -webkit-animation-name: drop-item-world;
  animation-name: drop-item-world;
`