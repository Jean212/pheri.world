import styled from 'styled-components';

export default styled.div`

list-style-type: none;
display: flex;
flex-direction: column;
align-items: center;

color: #333;
text-shadow: 2px 2px 5px rgba(135,100,184 ,0.75);

strong {
  font-family: Marmelad;
}
.socialMediaName {
  font-family: Marmelad;
  font-size: 32px;
  color: #FFF;
  margin-bottom: -20px;
}

.socialMediaButton {
  display: flex;
  justify-content: center;
  margin: 2.5px;
  padding: 5px;
  border-radius: 10%;

  text-shadow: 1px 1px 2px rgba(135,100,184 ,0.75);
  font-family: Marmelad;
  font-size: 20px;
  box-shadow: 1px 1px 2px rgba(135,100,184 ,0.75);

  a {
    color: #FFF;
    text-decoration: none;
  }

  :hover{
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(255, 0, 255,0.75);

  :active { 
    text-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
    box-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
  }
}
`