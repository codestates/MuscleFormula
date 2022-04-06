import { Link } from "react-router-dom";

import {
  AllLandingContainer,
  FirstLandingContainer,
  FirstText,
  GotoMainButton,
  FirstSecondText,
  FirstTextContainer,
  FirstImageContainer,
  BigCircle,
  SmallCircle,
  VerySmallCircle,
  SecLandingContainer,
  SecBodyContainer,
  SecBoxContainer,
  SecImgContainer,
  SecBigTxtContainer,
  SecDescrContainer,
  SecAllBoxContainer,
  ThirLandingContainer,
  ThirTextContainer,
  SevLandingContainer,
  ThirImageContainer,
  TitleContainer,
  DescrContainer,
  AllContainer,
  Circle,
  BodyContainer,
  BodyOutContainer,
  ThirdBodyContainer,
  ThirdBodyOutContainer,
  GoTopContainer,
} from "./LandingPage.style";

function LandingPage() {
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

  // 마지막 버튼 밑으로 스크롤이 내려간 상태로 메인으로 연결되는 것을 방지해 주는 핸들러
  const scrollHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <AllLandingContainer>
      <GoTopContainer id="arrow" onClick={scrollHandler}>
        <img src="images/icon_arrow.png" style={{ width: "70px" }}></img>
      </GoTopContainer>
      <SmallCircle id="small"></SmallCircle>
      <VerySmallCircle id="very"></VerySmallCircle>
      <BigCircle id="big"></BigCircle>
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
              <img
                src="./images/Landing_page1.jpg"
                alt="landingpage_img1"
              ></img>
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
                    <img src={el.img} alt={el.title[0]}></img>
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

export default LandingPage;
