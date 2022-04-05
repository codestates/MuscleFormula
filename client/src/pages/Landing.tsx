import * as React from "react";
import { PureComponent } from "react";
import styled from "styled-components";
import { Mobile, PC } from "../mediaQuery";
import {
  AllLandingContainer,
  FirstImageContainer,
  BodyContainer,
  BodyOutContainer,
  FirstTextContainer,
} from "../components/Landing/Landing.style";

export default function Landing() {
  return (
    <PC>
      <AllLandingContainer>
        <BodyOutContainer>
          <BodyContainer>
            <div className="page1">
              page1
              <FirstImageContainer>
                <img
                  className="page1"
                  src="images/photo_testuser_3.jpg"
                  style={{ width: "70px" }}
                ></img>
              </FirstImageContainer>
              <FirstTextContainer>
                <div id="text">
                  <div>무료한 일상 </div>
                  <div>일상에 지쳐 휴일에는 침대에 누워만 있는 당신. </div>
                  <div>
                    규칙적이고 건강한 삶을 통해 집나간 열정을 찾아볼까요?
                  </div>
                  <div>함께 가보자고! </div>
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
