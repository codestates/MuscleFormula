//component들을 여기서..? 만든다
import styled from "styled-components";
interface Idx {
  idx: number;
}

//페이지 상위로 올라가는 화살표
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
`;
//첫페이지 텍스트
export const FirstText = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  transition: 0.5s all;
  span {
    margin-bottom: 0.813rem;
  }
`;
//하단 콘테이너(링크등)
export const SevLandingContainer = styled.div`
  width: 100%;
  height: 223px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;
`;
//메인 link를 타고 들어가는 버튼 -가져오기..
export const GotoMainButton = styled.button`
  font-family: "Gmarket Sans TTF";
  font-weight: 100;
  width: 13.188rem;
  height: 4.063rem;
  background: #2d2d2d;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  transition: 0.5s all;
  :active {
    background: #3f3f3f;
  }
`;
//첫번째 랜딩페이지 하단에 위치하는 메시지
export const FirstSecondText = styled.div`
  font-weight: 300;
  font-size: 1.875rem;
  margin: 0.5rem 0 2.75rem 0;
  transition: 0.5s all;
  text-shadow: 2px 2px #fff, 2px -2px #fff, -2px 2px #fff, -2px -2px #fff;
`;

export const BodyContainer = styled.main`
  /* display: flex; */
  width: 100%;
  max-width: 78.75rem;
  padding: 0 30px 0 30px;
  /* background: linear-gradient(0deg, #42e722, #fbfafc); */
  /* flex-direction: column; */

  border: 1px dashed black;

  > .page1 {
    width: 100%;
    height: 51.313rem;
    display: flex;
    align-items: center;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    transition: 0.5s all;
    position: relative;
    /* background: linear-gradient(0deg, #fbfafc, #fbfafc); */
    border: 1px red solid;
  }

  > .page2 {
    width: 100%;
    height: 51.313rem;
    display: flex;
    align-items: center;
    background: linear-gradient(0deg, #fbfafc, #fbfafc);
    transition: 0.5s all;
    position: relative;
    /* background: linear-gradient(0deg, #fbfafc, #fbfafc); */
    border: 1px red solid;
  }
  > .page3 {
     {
      width: 100%;
      height: 51.313rem;
      display: flex;
      align-items: center;
      background: linear-gradient(0deg, #fbfafc, #fbfafc);
      transition: 0.5s all;
      position: relative;
      /* background: linear-gradient(0deg, #fbfafc, #fbfafc); */
      border: 1px red solid;
    
  }
  > .page4 {
    position: relative;
    flex: 1 0 auto;
    width: 100%;
    height: 51.313rem;
    display: flex;
    align-items: center;
    border: 1px solid red;
  }
`;

export const BodyOutContainer = styled.main`
  width: 100%;
  height: 300%;
  display: flex;
  justify-content: center;
  /* background: linear-gradient(0deg, #9428ff, #7b4aac); */
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

  /* > section {
    position: absolute;
    border: dashed black;
    width: 10%;
    height: 2000px;
    background: url("images/photo_testuser_2.jpg");
    background-attachment: fixed;
  } */

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
