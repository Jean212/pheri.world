import styled from 'styled-components';

export default styled.div`

/*Screen Occupy*/
height: 100vh;
width: 100%;
top: 0;
left: 0;
position: absolute;

/*Menu Style*/

overflow: hidden;
display: none;
flex-direction: column;
text-align: center;

justify-content: center;
align-items: center;

background-color: #333;

a {
  font-size: 40px;
}

#navClose {
  font-size: 72px;
  color: white;
  top: 0;
  right: 2%;
  margin-top: -5.5%;
  position: absolute;
}

@keyframes appear-text-trans {
  0%    { 
    opacity: 0;
  };
  100%  { 
    opacity: 1;
  };
}

@keyframes disappear-text-trans {
  0%    { 
    opacity: 1;
  };
  100%  { 
    opacity: 0;
  };
}
`

