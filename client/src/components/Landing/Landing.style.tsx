//component들을 여기서..? 만든다
import styled from "styled-components";
interface Idx {
  idx: number;
}

export const GoTopContainer = styled.div`
  position: fixed;
  cursor: pointer;
  top: 83%;
  left: 85%;
  z-index: 99;
  img {
    opacity: 0.2;
    :hover {
      opacity: 1;
    }
  }
  /* @media screen and (max-width: 37.5rem) {
    top: 93%;
    left: 85%;
    img {
      width: 30px;
      height: 30px;
    }
  } */
`;

export const BodyContainer = styled.main`
  /* display: flex; */
  width: 100%;
  max-width: 78.75rem;
  padding: 0 30px 0 30px;
  background: linear-gradient(0deg, #42e722, #fbfafc);
  flex-direction: column;

  border: 1px dashed black;

  > .page1 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 300%;
    background-size: 100%;

    align-items: center;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    border: 1px red solid;
    display: flex;
    flex-direction: column;
    transition: 0.5s all;
    position: relative;
  }

  > .page2 {
    flex: 1 0 auto;
    position: absolute;
    top: 0;

    background-size: 100%;
    width: 100%;
    height: 51.313rem;
    align-items: center;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    border: 1px red solid;
    display: flex;
    flex-direction: column;
    transition: 0.5s all;
    position: relative;
  }
  > .page3 {
    flex: 1 0 auto;
    position: relative;
    top: 0;
    width: 100%;
    height: 300%;
    background-size: 100%;

    align-items: center;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    border: 1px red solid;
    display: flex;
    flex-direction: column;
    transition: 0.5s all;
  }
  > .page4 {
    position: relative;
    flex: 1 0 auto;
    width: 100%;
    height: 51.313rem;
    display: flex;
    align-items: center;
    border: 1px solid red;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    transition: 0.5s all;
  }
`;

export const BodyOutContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #9428ff, #7b4aac);
`;

export const FirstTextContainer = styled.div`
  border: solid 3px green;
  display: flex;
  height: 100%;
  margin-left: 700px;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s all;
  z-index: 2;
  position: absolute;
  border: solid red;

  > .text {
    flex: 1 0 auto;
    font-weight: 100;
    font-size: 1.5rem;
    height: 15vh;
    margin-top: 23vh;
    /* transition: 0.5s all; */
    color: red;
    > .line {
      line-height: 130%;
    }
    > .line &:nth-child(1) {
      margin-top: 1vw;
    }
  }
  > .text2 {
    flex: 1 1 auto;
    flex-direction: column;
    color: #0e3a3a;
    height: 15vh;
    margin-top: 23vh;
    transition: 0.5s all;
  }
`;

export const FirstImageContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 3000px;

  > section {
    position: absolute;
    border: solid pink;
    width: 10%;
    height: 2000px;
    background: url("images/photo_testuser_3.jpg");
    background-attachment: fixed;
  }

  /* display: flex;
  align-items: center;
  height: 100%;
  transition: 0.5s all;
  z-index: 1;
  right: 0;
  img {
    width: 700px;
  } */
`;

export const AllLandingContainer = styled.div`
  background: linear-gradient(0deg, #bbbbbb, #bbbbbb);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500%;
  justify-content: center;
  align-items: center;
  font-family: "Gmarket Sans TTF";
  transition: 0.5s all;
`;
