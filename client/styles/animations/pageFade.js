import styled from 'styled-components';

export default styled.div`
  background-color: #f9e8f9;
  height: 100vh; 
  margin: 0;
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: fixed;
  pointer-events:none;

  display: flex;
  justify-content: center;
  align-items: center;

  .transitionText {
    color: #FFF;
    font-size: 72px;
  }

    
  animation: bg-fade 1.25s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;   
  }

  @keyframes bg-fade {
    0% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }
`