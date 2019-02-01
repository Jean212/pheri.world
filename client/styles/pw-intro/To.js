import styled from 'styled-components';

export default styled.div`

  display: flex;
  justify-content: center;

  background-repeat: no-repeat;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes drop-item-to {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes drop-item-to {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  -webkit-animation-name: drop-item-to;
  animation-name: drop-item-to;
`