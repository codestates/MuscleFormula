import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

//npm install styled-components
//modal 콘테이너에 넣기

//background 색찾기
// background
const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  height: 100%;
  width: 100%;
  background-color: rgba(255, 109, 86, 0.5);
  position: absolute;
`;
// // 로그인 버튼이 없네..? on keypress? 이벤트 핸들러로 처리
// // 아이디 input 창

const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  top: 10rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: dashed red;
`;

const ModalDiv = styled.div`
  /* margin-top: -1em; */
  top: 5em;
  margin: 1em;
`;

const Button = styled.button`
  background-color: #697f6e;
  margin-left: 1em;
  width: 70px;
  height: 30px;
  border: none;
  color: white;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Input = styled.input.attrs((props :any) => ({
  type: "text",
  size: props.size || "0.5em",
}))`
  background-color: grey;
  border: 2px solid palevioletred;
  margin: ${(props :any) => props.size};
  padding: ${(props :any) => props.size};
`;

//비번 입력창
const PasswordInput = styled.input.attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
  background-color: grey;
`;

export default function Login() {
  const [userInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = (key :any) => (e :any) => {
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
    <div>
      <ModalContainer>
        <ModalDiv>
          <Input placeholder="이메일을 입력하세요 "/>
          <br />
          <PasswordInput placeholder="패스워드를 입력하세요"/>
        </ModalDiv>
      </ModalContainer>
    </div>
  );
}