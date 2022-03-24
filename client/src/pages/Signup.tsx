import React, { useState } from "react";
import styled from 'styled-components';

export const SignupPage = styled.div`
font-family: "IBM Plex Sans KR", sans-serif;
display: flex;
border: green;
flex-direction: column;
border-radius: 10px;
`;

export const Headers = styled.div`
border: 1px solid red;
padding: 10px;
flex: 1 0 auto;
display: flex;
justify-content: space-around;

> img {
  display: flex;
  width : 10px;  
}
`;

export const Body = styled.div`
border: 1px solid red;
padding: 10px;
flex: 8 0 auto;

> div {
  border: 1px solid red;
  padding: 10px;
}
> #usersecretInput {
  display: flex;
  > input {
    margin-left: 10px;
  }
}
`;

export const Input = styled.input.attrs((props) => ({
type: "text",
size: props.size || "0.5em",
}))`
background-color: grey;
border: 2px solid palevioletred;
margin: ${(props) => props.size};
padding: ${(props) => props.size};
`;

export const Button = styled.div`
// border: 1px solid red;
/* padding: 10px; */
margin-top: 10px;
color: ${(props :any) => props.theme.fg};
border: 2px solid ${(props :any) => props.theme.fg};
display: flex;
background: ${(props :any) => props.theme.bg};

width: 220px;
> button {
  border: 0;
  background-color: #00cc99;
  cursor: pointer;
  margin: 0.5rem;
  width: 15vw;
  height: 5vh;
  font-size: 1rem;
}
> button:hover {
  color: #00ffcc; 
}
`;



export default function Signup() {
  //유저 정보, 관리
  //함수 만들필요없다.
  //
  return (
    <div >
      <SignupPage>
        <Headers>
          <img src="images/logo.png" width="150vw" alt="logo" />
        </Headers>
        <Body className="modal">
          <h1>회원 가입</h1>
          
          <ul>
            <li>
              이메일
              <input type ="test" placeholder="이메일을 입력하세요 "  />
            </li>
 
          <br />
 
            <li>
              nickname <input type="text" placeholder="닉네임을 적어주세요" />
              <button>중복확인</button>
            </li>
            <li>비밀번호
            <input
              type="password"
              placeholder="패스워드를 입력하세요"
            /></li>
            </ul>
          <br />
                <div>
            <li>
              비밀번호 확인{" "}
              <input type="password" placeholder="패스워드 확인" />
            </li>
          </div>
          <Button>
            <button className="SignupBtn">회원가입</button>
          </Button>
        </Body>
      </SignupPage>
    </div>
  );
}