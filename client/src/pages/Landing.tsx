import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Mobile, PC } from "../mediaQuery";

import {
  AllLandingContainer,
  GoTopContainer,
  FirstImageContainer,
  BodyContainer,
  BodyOutContainer,
  FirstTextContainer,
  FirstText,
  GotoMainButton,
  FirstSecondText,
  SevLandingContainer,
} from "../components/Landing/Landing.style";

export default function Landing() {
  // 마지막 버튼 밑으로 스크롤이 내려간 상태로 메인으로 연결되는 것을 방지해 주는 핸들러
  const scrollHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const SecondLandingPageTxt = [
    {
      title: "운동 세부 기록",
      img: "./images/landingimg1.svg",
      descr: [
        "근의 공식은  본인의 운동 기록을 다른유저들과 소통할 수 있는 커뮤니티입니다 .",
        "체계적인 운동 루틴",
        "운동부위, 난이도, 총 소요시간을 선택해 보세요! ",
      ],
    },
    {
      title: "게시물  확인",
      img: "./images/landingimg2.svg",
      descr: [
        "근의 공식은 ",
        "게시물을 통해 디테일한 운동 습관을 형성해 줍니다.",
      ],
    },
    {
      title: "순위 경쟁 ",
      img: "./images/landingimg3.svg",
      descr: [
        "근의 공식은 상위 3위 랭킹의 유저들에게",
        "메달을 달아 드립니다.",
      ],
    },
  ];
  return (
    <PC>
      <AllLandingContainer id="all">
        <GoTopContainer id="arrow" onClick={scrollHandler}>
          <img src="images/icon_arrow.png" style={{ width: "70px" }}></img>
        </GoTopContainer>
        <img></img>
        <img></img>
        <img></img>
        <BodyOutContainer>
          <BodyContainer>
            <div className="page1">
              page1
              <FirstImageContainer>
                <section></section>
              </FirstImageContainer>
              <FirstTextContainer>
                <FirstText>
                  <div>무료한 일상 </div>
                  <div>일상에 지쳐 휴일에는 침대에 누워만 있는 당신.</div>

                  <div> 열정만 갖고오세요! 함께 운동하자 GO! </div>
                  <div>함께 가보자 GO! </div>
                </FirstText>
                <FirstSecondText>
                  근의공식에서 운동으로 기록도 쌓고 교류 해보세요 !
                </FirstSecondText>
                <Link to="/main">
                  <GotoMainButton>운동하자 Go!</GotoMainButton>
                </Link>
              </FirstTextContainer>
              <FirstImageContainer>
                <img
                  src="images/photo_testuser_1.jpg"
                  alt="landingpage_img1"
                ></img>
              </FirstImageContainer>
            </div>

            <div className="page2">2?</div>
            <div className="page3">3?</div>
            <div className="page4">4?</div>
          </BodyContainer>
        </BodyOutContainer>
        <SevLandingContainer>
          {" "}
          <Link to="/main">
            <GotoMainButton onClick={() => scrollHandler()}>
              근의 공식 체험하기
            </GotoMainButton>
          </Link>
        </SevLandingContainer>
      </AllLandingContainer>
    </PC>
  );
}
