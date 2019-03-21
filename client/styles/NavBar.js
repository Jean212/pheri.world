import styled from 'styled-components';

export default styled.ul`
  width: 80%;

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
          cursor: pointer;
          :hover {
            border-radius: 10px;
            background-color: pink;
            opacity: 0.95;
          }
        }
    
        list-style-type: none;
    
        #pheri-logo-nav {
          height: 100px;
        }
    
        font-size: 40px;
        text-shadow: 2px 2px 3px #FFB6C1, 0 0 5px #FFF;
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