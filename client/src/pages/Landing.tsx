import axios from "axios";
import React from "react";
import { Mobile, PC } from "../mediaQuery";
import styled from "styled-components";
import type { RootState, AppDispatch } from "../store";
 

 

export const loading = styled.div`
  height: 100vh;
  > #app.loading:after {
    content: "...로딩중...";
    position: absolute;
    top: 50%;
     left: 50 %;
    transform: translate(-50%, -50%);
  }
`;
 
export const LoginPC = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

export const LoginMobile = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;


export default function Landing() {
  return (
    <div>
      <PC>
        <RenderingContainer>
          <div id="top">
            <div className="exWrapper">
              <img className="Excercise">
                <img id="log" src="../logo.png" alt="logo"></img>{" "}
              </img>
              <div className="line">혼자 운동하기 심심할때,</div>
              <div className="line">"함께 할" </div>
              <div className="line">운동 메이틀를 만들어보세요! </div>
              <div className="btnWrapper">
                <div className="GGBtn">Excercise!</div>
              </div>
            </div>
            <div className="mateWrapper">
              <img className="Mate">
                <img id="log " src="../logo.png" alt="logo"></img>{" "}
              </img>
              <div className="line"> 쓸쓸한 운동?</div>
              <div className="line">
                다른분들은 얼마나 하고 있는지 "보고"싶지 않으세요?
              </div>
              <div className="line">운동 메이틀를 만나보세요! </div>
              <div className="btnWrapper">
                <div className="GGBtn">Excercise!</div>
              </div>
            </div>
            <div className="searchWrapper">
              <img className="Search">
                <img id="log " src="../logo.png" alt="logo"></img>{" "}
              </img>
              <div className="line">혼자 운동하기 심심할때,</div>
              <div className="line">"함께 할" </div>
              <div className="line">운동 메이틀를 만들어보세요! </div>
              <div className="btnWrapper">
                <div className="GGBtn">Excercise!</div>
              </div>
            </div>
            <div className="joinWrapper">
              <img className="Join">
                <img id="log " src="../logo.png" alt="logo"></img>{" "}
              </img>
              <div className="line">혼자 운동하기 심심할때,</div>
              <div className="line">"함께 할" </div>
              <div className="line">운동 메이틀를 만들어보세요! </div>
              <div className="btnWrapper">
                <div className="GGBtn">Excercise!</div>
              </div>
            </div>
            <div className="doChatWrapper">
              <img className="Chat">
                <img id="log " src="../logo.png" alt="logo"></img>{" "}
              </img>
              <div className="line">혼자 운동하기 심심할때,</div>
              <div className="line">"함께 할" </div>
              <div className="line">운동 메이틀를 만들어보세요! </div>
              <div className="btnWrapper">
                <div className="GGBtn">Excercise!</div>
              </div>
            </div>
            <div className="medalWrapper">
              <img className="Medal">
                <img id="log " src="../logo.png" alt="logo"></img>{" "}
              </img>
              <div className="line">혼자 운동하기 심심할때,</div>
              <div className="line">"함께 할" </div>
              <div className="line">운동 메이틀를 만들어보세요! </div>
              <div className="btnWrapper">
                <div className="GGBtn">Excercise!</div>
              </div>
            </div>
          </div>
        </RenderingContainer>
      </PC>

    </div>
  );
}
