import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

//modal 콘테이너에 넣기
export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: dashed red;
`;
//background 색찾기
// background
export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  height: 100%;
  width: 100%;
  background-color: rgba(255, 109, 86, 0.5);
  position: absolute;
`;
// // 로그인 버튼이 없네..? on keypress? 이벤트 핸들러로 처리
// // 아이디 input 창

export const emailInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  background-color: grey;
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
//비번 입력창
export const passwordInput = styled(emailInput).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
  background-color: grey;
`;

//render
//export const Modal = () => {
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
    <div>
      <ModalContainer>
        <emailInput
          placeholder="이메일을 입력하세요 "
          size="2em"
          onChange={handleInputValue("email")}
        />
        <br />
        <passwordInput
          placeholder="패스워드를 입력하세요"
          size="2em"
          onChange={handleInputValue("password")}
        />
      </ModalContainer>
    </div>
  );
}
