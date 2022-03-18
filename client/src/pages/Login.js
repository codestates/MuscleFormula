import React, { useState } from "react";
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
  top: 2.5rem;
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

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "0.5em",
}))`
  background-color: grey;
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

//비번 입력창
const passwordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
  background-color: grey;
`;

export default function Login() {
  return (
    <div>
      <ModalContainer>
        <ModalDiv>
          <Input placeholder="이메일을 입력하세요 " size="2em" />
          <br />
          <passwordInput placeholder="패스워드를 입력하세요" size="2em" />
        </ModalDiv>
      </ModalContainer>
    </div>
  );
}
