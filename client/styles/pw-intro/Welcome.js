import styled from 'styled-components';

export default styled.div`

  display: flex;
  justify-content: center;

  background-repeat: no-repeat;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes drop-item-welcome {
    0% {
      transform: translateY(-75px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes drop-item-welcome {
    0% {
      transform: translateY(-75px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  -webkit-animation-name: drop-item-welcome;
  animation-name: drop-item-welcome;
`