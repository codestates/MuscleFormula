import styled from "styled-components";
/* background-image: url(${(props) => props.img}); */
// import "../../styles/styles.scss";
// import " ../../styles/mixins.scss";
const RenderingContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
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

const LoginPC = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > .ExWrapper {
    @include landing-section-wrapper(10vh auto 5vh auto);
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
  }
`;

const LoginMobile = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;
export { RenderingContainer, LoginMobile, LoginPC };
