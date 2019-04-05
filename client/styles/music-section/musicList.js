import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  pointer-events:auto;

  margin-top: 20px;
  marging-bottom: 100px;
  
  flex-direction: column;
  align-items: center;


  font-family: Marmelad;

  .albumImage {
    width: 35%;
    margin: 10px;
    box-shadow: 2px 2px 5px rgba(135,100,184 ,0.75);
    :hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px rgba(135,100,184 ,0.75);
    }
  }

  .albumName {
    display: flex;
    justify-content: center;

    background-color: #FFF;
    width: 80%;

    color: #ED6C8C;
    font-size: 24px;
    text-shadow: 1px 1px 2px rgba(135,100,184 ,0.5);
  }

  .albumInfo {
    list-style-type: none;
    display: flex;
    flex-direction: row;

    li {
      margin: 5px;
    }
  }

  .buyMusic {
    color: #333;
    background-color: #F2B3DC;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(210, 95, 170 ,0.65);

    :hover{
      cursor: pointer;
      border-radius: 5px;
      background-color: pink;
      opacity: 0.95;
    }

    :active { 
      text-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
      box-shadow: 1px 1px 5px rgba(135,100,184 ,0.75);
    }
  }

  
  @media only screen
  and (max-width: 790px) 
  and (orientation: portrait) { 
    .albumImage, .albumName, .albumInfo {
      width: 80%;
    }
    .albumName {
      font-size: 18px;
    }

    .albumInfo {
      flex-direction: column;
      align-items: center;
    }
  }
`