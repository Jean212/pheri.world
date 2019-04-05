import styled from 'styled-components';

export default styled.div`
display: flex;
flex-direction: column;
align-items: center;

.constructionText {
  font-family: Marmelad;
  display: flex;
  justify-content: center;
  margin: 15px;
  margin-top: 25px;

  color: #333;
  text-shadow: 1px 1px 1px #000;

  h2 {
    font-size: 32px;
  }

  background-color: #FFF;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
}

.constructionDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.constructionImgDiv {
  .constructionImg {
    width: 100%;
  }
}

.redirect {
  color: #FF69B4;
  text-shadow: 1px 1px 1px rgba(135,100,184 ,0.75);
  :hover {
    cursor: pointer;
    color: #FF1493;
  }
}
`