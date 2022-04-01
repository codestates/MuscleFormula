import * as React from "react";
import { PureComponent } from "react";
import styled from "styled-components";
import { Mobile, PC } from "../mediaQuery";
/* background-image: url(${(props) => props.img}); */
// import "../../styles/styles.scss";
// import " ../../styles/mixins.scss";

export const RenderingContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  border: 1px red solid;

  > .exWrapper {
    border: 1px blue solid;
  }
  /* @include landing-section-wrapper(10vh auto 5vh auto);
    display: flex;
  }
  > .exInfo {
    @include flex-column-settting;
    height: 15vh;
    margin-top: 23vh;
    font: {
      size: 2rem;
      weight: 500;
    }
  }
  > .line {
    @include mobile {
      font-size: 2vw;
    }
    @include desktop {
      font-size: 30px;
    }
    line-height: 130%;
    color: $--text-color;
    &:nth-child(1) {
      margin-top: 6vw;
    }
  }
  > .btnWrapper {
    display: flex;
  }
  > .GGBtn {
    @include gradient-btn($font-size: 1.5vw, $color: $white, $prefixes: ());
    @include mobile {
      font-size: 1.3vw;
    }
    @include desktop {
      font-size: 18px;
    }
  } */
`;
// https://lpla.tistory.com/107
// https://github.com/kim-kyoungyeon/rightnow/blob/dev/client/tailwind.config.js

// https://right-now.link/

// https://www.dorunapp.com/
// https://github.com/kim-kyoungyeon/DoRun/blob/dev/client/src/App.js
// https://lpla.tistory.com/106
// https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
// https://github.com/kim-k.youngyeon/DoRun/blob/dev/client/src/components/Landing/Walk.scss
//https://elwoxcorp.com/?page_id=887
// > .top {
//   @include flex-column-settting;
//   @include mobile {
//     width: 25vw;
//     height: 45vh;
//   }
//   @include desktop {
//     width: 500px;
//     height: 700px;
//     margin-left: -150px;
//   }
// }

// > .ExWrapper {
//   include flex-column-settting;

// }

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
