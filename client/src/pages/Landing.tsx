import { Link } from "react-router-dom";
import styled from "styled-components";

interface Idx {
  idx: number;
}

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

export const BodyContainer = styled.main`
  width: 100%;
  max-width: 78.75rem;
  padding: 0 30px 0 30px;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const BodyOutContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
`;

export const FirstLandingContainer = styled.div`
  width: 100%;
  height: 51.313rem;
  display: flex;
  align-items: center;
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
`;

export const FirstTextContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s all;
  z-index: 2;
  position: absolute;
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

export const FirstText = styled.div`
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
`;

export const FirstSecondText = styled.div`
  font-weight: 300;
  font-size: 1.875rem;
  margin: 0.5rem 0 2.75rem 0;
  transition: 0.5s all;
  text-shadow: 2px 2px #fff, 2px -2px #fff, -2px 2px #fff, -2px -2px #fff;
  @media screen and (max-width: 1000px) {
    margin: 39px 0 45px 0;
  }
  @media screen and (max-width: 37.5rem) {
    font-size: 20px;
    transition: 0.5s all;
    margin: 39px 0 45px 0;
    text-shadow: none;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
    margin: 20px 0 40px 0;
  }
`;

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

export const BigCircle = styled.span`
  position: absolute;
  left: 15.5rem;
  top: 14rem;
  width: 30.125rem;
  height: 40.5rem;
  background: #00cc99;
  border-radius: 100%;
  box-sizing: border-box;
  transition: 0.5s all;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SmallCircle = styled.span`
  position: relative;
  left: -10rem;
  top: 10rem;
  border-bottom: calc(2.945rem * 1.732) solid #00cc99;
  border-left: 2.945rem solid transparent;
  border-right: 2.945rem solid transparent;
  transition: 0.5s all;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    width: 3.945rem;
    height: 3.945rem;
    left: -16.5rem;
    top: 46.8rem;
    transition: 0.5s all;
  }
  @media screen and (max-width: 37.5rem) {
    width: 2.945rem;
    height: 2.945rem;
    left: -11.3rem;
    top: 36.5rem;
    transition: 0.5s all;
  }
  @media screen and (max-width: 420px) {
    width: 1.945rem;
    height: 1.945rem;
    left: -8.7rem;
    top: 28.7rem;
  }
`;
export const VerySmallCircle = styled.span`
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    left: -210px;
    top: 763px;
    position: relative;
    background: #00cc99;
    border-radius: 100%;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    transition: 0.5s all;
  }
  @media screen and (max-width: 37.5rem) {
    left: -138.9px;
    top: 595px;
    width: 13px;
    height: 13px;
  }
  @media screen and (max-width: 420px) {
    left: -108.9px;
    top: 468px;
  }
`;

export const SecLandingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 118px 0 118px 0;
  background: #00cc99;
  justify-content: center;
  font-family: Gmarket Sans TTF;
  transition: 0.5s all;
  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-items: center;
    transition: 0.5s all;
    padding: 0;
  }
`;

export const SecBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #00cc99;
  padding: 0 30px 0 30px;
  width: 100%;
  transition: 0.5s all;

  @media screen and (max-width: 37.5rem) {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s all;
    width: 100%;
    height: 100%;
  }
`;

export const SecAllBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  transition: 0.5s all;

  @media screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    transition: 0.5s all;
    width: 100%;
    height: 100%;
  }
`;

export const SecBoxContainer = styled.div<Idx>`
  display: flex;
  flex-direction: column;
  background: #fdfbfe;
  border: 1px solid #e0dde1;
  box-sizing: border-box;
  border-radius: 5px;
  width: 396px;
  height: 400px;
  justify-content: space-evenly;
  transition: 0.5s all;
  margin: 59px 19px 57px 19px;
  @media screen and (max-width: 37.5rem) {
    width: 240px;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: 0.5s all;
    margin: ${(props) =>
      props.idx === 0
        ? "59px 19px 0px 19px"
        : props.idx === 1
        ? "30px 19px 30px 19px"
        : "0 19px 59px 19px"};
  }
`;

export const SecImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;
  img {
    width: 135.5px;
    height: 164.75px;
    transition: 0.5s all;
  }
  @media screen and (max-width: 37.5rem) {
    height: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    img {
      width: 74.85px;
      height: 91px;
      transition: 0.5s all;
    }
  }
`;

export const SecBigTxtContainer = styled.div`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    font-size: 14px;
    transition: 0.5s all;
  }
`;

export const SecDescrContainer = styled.div`
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    font-size: 12px;
    transition: 0.5s all;
  }
`;

export const ThirLandingContainer = styled.div<Idx>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.idx === 0 ? "110px" : "0")};
  transition: 0.5s all;
  width: 100%;
  height: 51.313rem;
  position: relative;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 70rem;
  }
  @media screen and (max-width: 37.5rem) {
    margin-top: 50px;
    height: 431px;
  }
`;

export const ThirTextContainer = styled.div<Idx>`
  position: absolute;
  display: flex;
  flex-direction: column;
  transition: 0.5s all;
  z-index: 2;
  left: ${(props) => (props.idx % 2 === 0 ? "0" : "none")};
  right: ${(props) => (props.idx % 2 === 0 ? "none" : "0")};
  @media screen and (max-width: 1000px) {
    position: static;
    left: none;
    right: none;
    top: 0;
  }
`;

export const TitleContainer = styled.div`
  font-size: 30px;
  font-weight: 300;
  z-index: 2;
  transition: 0.5s all;
  text-shadow: 2px 2px #fff, 2px -2px #fff, -2px 2px #fff, -2px -2px #fff;
  div {
    margin-bottom: 13px;
    transition: 0.5s all;
  }
  @media screen and (max-width: 1000px) {
    text-shadow: none;
  }
  @media screen and (max-width: 37.5rem) {
    font-size: 17px;
    transition: 0.5s all;
    div {
      margin-bottom: 9px;
      transition: 0.5s all;
    }
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const DescrContainer = styled.div`
  font-size: 24px;
  font-weight: 100;
  transition: 0.5s all;
  div {
    margin-top: 10px;
    margin-bottom: 9px;
    transition: 0.5s all;
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 1000px) {
    div {
      background: none;
    }
  }
  @media screen and (max-width: 37.5rem) {
    font-size: 15px;
    font-weight: 100;
    transition: 0.5s all;
    div {
      margin-bottom: 5px;
      transition: 0.5s all;
    }
  }
  @media screen and (max-width: 420px) {
    font-size: 12px;
  }
`;

export const ThirImageContainer = styled.div<Idx>`
  /* margin: ${(props) =>
    props.idx % 2 === 0 ? "30px 100px 0 0" : "30px 0 0 30px"}; */
  transition: 0.5s all;
  position: absolute;
  z-index: 1;
  left: ${(props) => (props.idx % 2 === 0 ? "none" : "0")};
  right: ${(props) => (props.idx % 2 === 0 ? "0" : "none")};
  img {
    width: 550px;
    height: 550px;
    transition: 0.5s all;
  }
  @media screen and (max-width: 1000px) {
    left: none;
    right: none;
    margin-top: 30px;
    position: static;
    bottom: 0;
    transition: 0.5s all;
  }
  @media screen and (max-width: 37.5rem) {
    img {
      width: 266px;
      height: 238px;
      transition: 0.5s all;
    }
  }
`;

export const SevLandingContainer = styled.div`
  width: 100%;
  height: 223px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 37.5rem) {
    width: 100%;
    height: 144px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
  }
`;

export const AllContainer = styled.div<Idx>`
  display: flex;
  flex-direction: ${(props) => (props.idx % 2 === 0 ? "row-reverse" : "row")};
  align-items: center;
  transition: 0.5s all;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Circle = styled.span`
  position: relative;
  width: 71px;
  height: 71px;
  left: -10%;
  top: 28px;

  border-bottom: calc(51px * 1.732) solid #00cc99;
  border-left: 51px solid transparent;
  border-right: 51px solid transparent;
  transition: 0.5s all;
  z-index: 0;
  @media screen and (max-width: 1000px) {
  }
  @media screen and (max-width: 37.5rem) {
    width: 36px;
    height: 36px;
    top: 15px;
    left: -19px;
    transition: 0.5s all;
  }
`;

export const ThirdBodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 78.75rem;
  padding: 0 27px 0 27px;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const ThirdBodyOutContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
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
  @media screen and (max-width: 37.5rem) {
    top: 93%;
    left: 85%;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

function Landing() {
  const SecondLandingPageTxt = [
    {
      title: "순위 경쟁",
      img: "./images/icon_goldmedal.png",

      descr: [
        "근의 공식은 운동 기록을 통해",
        "다른 유저와 경쟁할 수 있는 플랫폼입니다. ",
      ],
    },
    {
      title: "운동 게시물 확인",
      img: "./images/icon_bulletin-board-9123.svg",
      descr: ["근의 공식은 인기 게시물을 ", "한눈에 확인 할 수 있습니다."],
    },
    {
      title: "실시간 기록 확인",
      img: "./images/icon_24-hours-timer-12573.svg",
      descr: [
        "근의 공식은 하루동안",
        "본인의 운동기록을 초단위로 기록할 수 있습니다.",
      ],
    },
  ];

  const LandingPageTxt = [
    {
      title: ["01", "운동 세부 기록을", "확인해보세요"],
      img: "./images/Landing_page1.svg",
      descr: [
        "근의 공식은  본인의 운동 기록을 다른유저들과 소통할 수 있는 커뮤니티입니다 .",
        "체계적인 운동 루틴",
        "운동부위, 난이도, 총 소요시간을 선택해 보세요! ",
      ],
    },
    {
      title: ["02", "유저들간", "순위 경쟁을 해보세요"],
      img: "./images/Landing_page2.png",
      descr: [
        "근의 공식은 상위 3위 랭킹의 유저들에게",
        "메달을 달아 드립니다.",
      ],
    },
    {
      title: [
        "03",
        "게시물을  확인해",
        " 다른 유저들은 어떤 운동을 하는지 확인해보세요",
      ],
      img: "./images/Lading_page3.svg",
      descr: [
        "근의 공식은 ",
        "게시물을 통해 디테일한 운동 습관을 형성해 줍니다.",
      ],
    },
  ];

  const scrollHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <AllLandingContainer>
      <BodyOutContainer>
        <BodyContainer>
          <FirstLandingContainer>
            <FirstTextContainer>
              <FirstText>
                <div>무료한 일상</div>
                <div>일상에 지쳐 휴일에는 침대에 누워만 있는 당신.</div>
                <div>열정만 갖고오세요! 함께 운동하자 GO! </div>
                <div>함께 가보자 GO!</div>
              </FirstText>
              <FirstSecondText>
                근의공식에서 운동으로 기록도 쌓고 교류 해보세요 !
              </FirstSecondText>
              <Link to="/main">
                <GotoMainButton> 근의 공식 시작하기</GotoMainButton>
              </Link>
            </FirstTextContainer>
            <FirstImageContainer>
              <img src="./images/Landing_page1.jpg" alt="landingpage_img1" />
            </FirstImageContainer>
          </FirstLandingContainer>
        </BodyContainer>
      </BodyOutContainer>
      <SecLandingContainer>
        <SecBodyContainer>
          <SecAllBoxContainer>
            {SecondLandingPageTxt.map((el, idx) => {
              return (
                <SecBoxContainer idx={idx} key={el.title}>
                  <SecImgContainer>
                    <img src={el.img} alt={el.title}></img>
                  </SecImgContainer>
                  <SecBigTxtContainer>{el.title}</SecBigTxtContainer>
                  <SecDescrContainer>
                    {el.descr.map((el) => {
                      return <div key={el[0]}>{el}</div>;
                    })}
                  </SecDescrContainer>
                </SecBoxContainer>
              );
            })}
          </SecAllBoxContainer>
        </SecBodyContainer>
      </SecLandingContainer>
      <ThirdBodyOutContainer>
        <ThirdBodyContainer>
          {LandingPageTxt.map((el, idx) => {
            return (
              <ThirLandingContainer idx={idx} key={el.title[0]}>
                <AllContainer idx={idx}>
                  <ThirTextContainer idx={idx}>
                    <Circle></Circle>
                    <TitleContainer>
                      {el.title.map((el) => {
                        return <div key={el[0]}>{el}</div>;
                      })}
                    </TitleContainer>
                    <DescrContainer>
                      {el.descr.map((el) => {
                        return <div key={el[0]}>{el}</div>;
                      })}
                    </DescrContainer>
                  </ThirTextContainer>
                  <ThirImageContainer id="3rd" idx={idx}>
                    {" "}
                    <img src={el.img} alt={el.title[0]} />
                  </ThirImageContainer>
                </AllContainer>
              </ThirLandingContainer>
            );
          })}
        </ThirdBodyContainer>
      </ThirdBodyOutContainer>
      <SevLandingContainer>
        <Link to="/main">
          <GotoMainButton onClick={() => scrollHandler()}>
            근의 공식 시작하기
          </GotoMainButton>
        </Link>
      </SevLandingContainer>
    </AllLandingContainer>
  );
}

export default Landing;
