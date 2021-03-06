import styled from 'styled-components';

export default styled.div`
  a {
    color: #FFF;
  }
  
  a:hover, a:focus{
    cursor: pointer;
    border-radius: 5px;
    background-color: pink;
    opacity: 0.95;
  }

  a:active { 
    text-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
  }

  .navWide {
    a:hover, a:focus{
      color: black;
    }
  }

  animation: drop-item-button 0.6s;

  @-webkit-keyframes drop-item-button {
    0% {
      transform: translateY(-75px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes drop-item-button {
    0% {
      transform: translateY(-75px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
    }
  }
`