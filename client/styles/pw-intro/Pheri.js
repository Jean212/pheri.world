import styled from 'styled-components';

export default styled.div`

  display: flex;
  justify-content: center;

  background-repeat: no-repeat;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes drop-item-pheri {
    0% {
      transform: translateY(-125px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes drop-item-pheri {
    0% {
      transform: translateY(-125px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  -webkit-animation-name: drop-item-pheri;
  animation-name: drop-item-pheri;
`