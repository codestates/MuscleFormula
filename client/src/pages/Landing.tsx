import axios from "axios";
import React from "react";
import { Mobile, PC } from "../mediaQuery";

import {
  AllLandingContainer,
  GoTopContainer,
  FirstImageContainer,
  BodyContainer,
  BodyOutContainer,
  FirstTextContainer,
} from "../components/Landing/Landing.style";



export default function Landing() {
  // 마지막 버튼 밑으로 스크롤이 내려간 상태로 메인으로 연결되는 것을 방지해 주는 핸들러
  const scrollHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <PC>
      <AllLandingContainer>
        <GoTopContainer onClick={scrollHandler}>
          <img src="images/icon_arrow.png" style={{ width: "70px" }}></img>
        </GoTopContainer>
        <BodyOutContainer>
          <BodyContainer>
            <div className="page1">
              page1
              <FirstImageContainer>
                <img
                  className="page1"
                  src="images/photo_testuser_3.jpg"
                  alt="landingpage_img1"
                ></img>
              </FirstImageContainer>
              <FirstTextContainer>
                <div className="text">
                  <div className="line">무료한 일상 </div>
                  <div className="line">
                    일상에 지쳐 휴일에는 침대에 누워만 있는 당신.
                  </div>
                  <div className="line">
                    열정만 갖고오세요! 함께 운동하자 GO!
                  </div>
                  <div className="line">함께 가보자 GO! </div>
                </div>
                <div className="text2">
                  근의공식에서 운동으로 기록도 쌓고 교류 해보세요 !
                </div>
              </FirstTextContainer>
            </div>

            <div className="page2">2?</div>
            <div className="page3">3?</div>
            <div className="page4">4?</div>
          </BodyContainer>
        </BodyOutContainer>
      </AllLandingContainer>
    </PC>

  );
}
