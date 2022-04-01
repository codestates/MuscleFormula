//component들을 여기서..? 만든다
import styled from "styled-components";
interface Idx {
  idx: number;
}

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

export const BodyOutContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #9428ff, #7b4aac);
`;
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
export const FirstTextContainer = styled.div`
  border: solid 3px green;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s all;
  z-index: 2;
  position: absolute;
  border: solid red;
  @media screen and (max-width: 1000px) {
    position: static;
    margin-top: 20px;
    transition: 0.5s all;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 313px;
  }
  @media screen and (max-width: 420px) {
    margin-top: 0;
    height: 250px;
  }

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
    @media screen and (max-width: 1000px) {
      div {
        margin-bottom: 4px;
      }
    }
    @media screen and (max-width: 37.5rem) {
      font-size: 18px;
      transition: 0.5s all;
    }
    @media screen and (max-width: 420px) {
      font-size: 14px;
    }
  }
  > .text2 {
    flex: 1 1 auto;
    flex-direction: column;
    color: #0e3a3a;
    height: 15vh;
    margin-top: 23vh;
    transition: 0.5s all;
    @media screen and (max-width: 1000px) {
      div {
        margin-bottom: 4px;
      }
    }
    @media screen and (max-width: 37.5rem) {
      font-size: 18px;
      transition: 0.5s all;
    }
    @media screen and (max-width: 420px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1000px) {
    div {
      margin-bottom: 4px;
    }
  }
  @media screen and (max-width: 37.5rem) {
    font-size: 18px;
    transition: 0.5s all;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const FirstImageContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  transition: 0.5s all;
  z-index: 1;
  right: 0;
  img {
    width: 700px;
  }
  @media screen and (max-width: 1000px) {
    position: static;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0px;
    img {
      width: 500px;
    }
  }
  @media screen and (max-width: 37.5rem) {
    margin-bottom: 0;
    img {
      width: 317px;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      width: 287px;
    }
  }
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

  > .page2 {
    /* flex: 1 0 auto;
    width: 100%;
    height: 51.313rem;
    display: flex;
    align-items: center;
    border: 1px solid red;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    transition: 0.5s all;
    position: relative;
     */
    flex: 1 0 auto;
    position: absolute;
    top: 0;
    width: 100%;
    height: 300%;
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

    @media screen and (max-width: 1000px) {
      margin: 70px 0 70px 0;
      height: auto;
      position: static;
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      justify-content: center;
      transition: 0.5s all;
    }
  }
  > .page3 {
    flex: 1 0 auto;
    position: relative;
    top: 0;
    width: 100%;
    height: 300%;
    background-size: 100%;
    width: 100%;
    height: 51.313rem;
    align-items: center;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    border: 1px red solid;
    display: flex;
    flex-direction: column;
    transition: 0.5s all;

    @media screen and (max-width: 1000px) {
      margin: 70px 0 70px 0;
      height: auto;
      position: static;
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      justify-content: center;
      transition: 0.5s all;
    }
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

    @media screen and (max-width: 1000px) {
      margin: 70px 0 70px 0;
      height: auto;
      position: static;
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      justify-content: center;
      transition: 0.5s all;
    }
  }
`;
