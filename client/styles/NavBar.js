import styled from 'styled-components';

export default styled.ul`
  * {margin: 0; padding: 0;}
  padding-left: 0;

  width: 100%;

  font-family: Marmelad;
  color: #FFF;

  @media only screen
    and (min-width: 667px) {
      .navNarrow {
        display: none;
      }
      .navWide {        
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        #pheri-logo-nav {
          height: 50px;
          margin-top: -5px;
          cursor: pointer;
          :hover {
            border-radius: 10px;
            background-color: pink;
            opacity: 0.95;
          }
        }
    
        list-style-type: none;

        font-size: 28px;
        text-shadow: 2px 2px 3px #FFB6C1, 0 0 5px #FFF;
    
        @media only screen and (max-width: 1400px) {
          font-size: 28px;
    

        }
    
        @media only screen and (max-width: 900px) {
          font-size: 28px;
        }  
      }
    }
  
  @media only screen
  and (max-width: 790px) 
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