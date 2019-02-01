import styled from 'styled-components';

export default styled.ul`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  list-style-type: none;

  font-family: Marmelad;
  color: #FFF;

  #pheri-logo-nav {
    height: 100px;
  }

  font-size: 60px;
  margin-top: 1%;

  @media only screen and (max-width: 1400px) {
    font-size: 36px;

    #pheri-logo-nav {
      height: 60px;
    }
  }

  @media only screen and (max-width: 900px) {
    font-size: 28px;

    #pheri-logo-nav {
      height: 60px;
    }
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) { 
    /* Mobile-Friendly Hamburger Menu*/
    color: blue;
  }

`