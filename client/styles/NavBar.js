import styled from 'styled-components';

export default styled.ul`
  width: 80%;

  font-family: Marmelad;
  color: #FFF;

  @media only screen
    and (min-width: 668px) {
      .navNarrow {
        display: none;
      }
      .navWide {        
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    
        list-style-type: none;
    
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
      }
    }
  
  @media only screen
  and (max-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) { 
    /* Mobile-Friendly Hamburger Menu*/
    .navWide {
			display: none;
    }
    
    .navNarrow {
      height: 100%;
      
      .menuButton {
        float: right;
        cursor: pointer;
        color: #FFF;
      }
      
      .narrowLinks {  
        display: none;

        .closeBtn {
          color: red;
        }
      }

      /* end Narrow Nav*/
    }
  }

`