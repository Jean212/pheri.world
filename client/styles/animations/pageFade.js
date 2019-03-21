import styled from 'styled-components';

export default styled.div`
  background-color: #FFF;
  height: 100vh; 
  margin: 0;
  top:0;
  left:0;
  bottom:0;
  right:0;
  position: fixed;
  pointer-events:none;

    
  animation: bg-fade 0.6s;
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