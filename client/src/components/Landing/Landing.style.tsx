//component들을 여기서..? 만든다
import styled from "styled-components";

export const AllLandingContainer = styled.div`
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Gmarket Sans TTF";
  transition: 0.5s all;
  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all;
  }
`;

export const BodyOutContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #7b4aac, #7b4aac);
`;
export const FirstTextContainer = styled.div`
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
  > #text {
    font-weight: 100;
    font-size: 1.5rem;
    transition: 0.5s all;
    span {
      margin-bottom: 0.813rem;
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
`;
export const FirstImageContainer = styled.div`
  /* position: absolute; */

  flex-direction: column;
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
  > .page1 {
    display: flex;
    /* flex-flow: row wrap; */
    /* position: relative; */
    flex: 1 1 auto;
    flex-direction: column;
    /* width: 25vw;
    height: 45vh; */
  }
`;

export const BodyContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 78.75rem;
  padding: 0 30px 0 30px;
  background: linear-gradient(0deg, #42e722, #fbfafc);
  flex-direction: column ;
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
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

  
  > .page2 {
    flex: 1 0 auto;
    width: 100%;
    height: 51.313rem;
    display: flex;
    align-items: center;
    border: 1px solid red;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
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
  > .page4 {
    flex: 1 0 auto;
    width: 100%;
    height: 51.313rem;
    display: flex;
    align-items: center;
    border: 1px solid red;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
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
`;
