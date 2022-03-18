import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

//npm install styled-components
//modal 콘테이너에 넣기

//background 색찾기
// background

const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  margin: 2.5rem;
  height: 50rem;
  width: 100rem;
  display: flex;
  flex-direction: column;
  border: solid red;

  > #top {
    margin: 1em;
    padding: 1em;
    border: solid green;
  }
  > #bottom {
    margin: 1em;
    padding-left: 0.1em;
    border: solid green;
  }
`;
const Headers = styled.div`
  border: solid blue;
  display: flex;
  justify-content: space-around;
  > img {
    display: flex;
  }
`;

const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  height: 50%;
  width: 100%;
  background-color: rgba(255, 109, 86, 0.5);
  position: absolute;
`;
// // 로그인 버튼이 없네..? on keypress? 이벤트 핸들러로 처리
// // 아이디 input 창

const ModalDiv = styled.div`
  /* margin-top: -1em; */
  margin: 1em;
  height: 5rem;
  width: 5rem;
`;

const Button = styled.button`
  background-color: #00cc99;
  opacity: 1;
  margin-left: 1em;
  width: 70px;
  height: 30px;
  border: none;
  color: black;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Footer = styled.div`
  margin: 1em;
  border: dashed blue;
  margin: 1em;
  height: 50%;
  width: 100%;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  background-color: grey;
  border: 0.5rem solid black;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

//비번 입력창
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 0.5rem solid black;
`;

//"계정이 없으세요? useState"

export default function Login() {
  const [userInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...userInfo, [key]: e.target.value });
  };
  //input 값 설정

  const serverURL = 'http://localhost:8080'

  const handleGuestLogin = () => {
    const url = `${serverURL}/login`;
  };

  const handleLogin = () => {
    if (!userInfo.email || !userInfo.password) {
      return alert("아이디와 비밀번호 모두 입력 하세요.");
    }
  };
  return (
    <div id="container">
      <ModalContainer>
        <Headers>
          <img src={require("../images/logo.png")} width="220px" alt="logo" />
        </Headers>
        <div id="top">
          <h3>
            아이디 <Input placeholder="이메일입력" size="1em" />
          </h3>
        </div>
        <div id="bottom">
          <h3>
            비밀번호 <PasswordInput placeholder="비밀번호" size="1em" />
          </h3>
        </div>

        <Button>입장</Button>
        <br />
        <Button>퇴장</Button>
        <Footer></Footer>
      </ModalContainer>
    </div>
  );
}
