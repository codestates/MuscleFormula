/**회원가입 페이지**/

// const ModalContainer = styled.div`
//   // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
//   top: 2.5rem;
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;z
//   border: dashed red;
// `;

import React, { useState } from "react";
import styled from "styled-components";


const SignupPage = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 90vw;
  border-radius: 10px;
`;

const Headers = styled.div`
  border: 1px solid red;
  padding: 10px;
  flex: 1 0 auto;
  display: flex;
  justify-content: space-around;

  > img {
    display: flex;
  }
`;

const Body = styled.div`
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

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "0.5em",
}))`
  background-color: grey;
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// const passwordInput = styled(Input).attrs({
//   type: "password",
// })`
//   // similarly, border will override Input's border
//   border: 2px solid aqua;
//   background-color: grey;
// `;

const Button = styled.div`
  // border: 1px solid red;
  /* padding: 10px; */
  margin-top: 10px;
  color: ${(props :any) => props.theme.fg};
  border: 2px solid ${(props :any) => props.theme.fg};
  display: flex;
  background: ${(props :any) => props.theme.bg};

  width: 220px;
  > button {
    //border: 1px solid red;
    /* padding: 10px; */
    border: 0;
    background-color: #00cc99;
    cursor: pointer;
    margin: 0.5rem;
    width: 15vw;
    height: 5vh;
    font-size: 1rem;
  }
  > button:hover {
    color: #00ffcc; //
  }
`;

export default function Signup() {
  //유저 정보, 관리
  //함수 만들필요없다.
  //
  return (
    <div>
      <SignupPage>
        <Headers>
          <img src="images/logo.png" width="150vw" alt="logo" />
        </Headers>
        <Body className="modal">
          <h1>회원 가입</h1>
          <div>
            <h3>
              이메일
              <Input placeholder="이메일을 입력하세요 " size="2em" />
            </h3>
          </div>{" "}
          <br />
          <div>
            <h3>
              nickname <input type="text" placeholder="닉네임을 적어주세요" />{" "}
              <button>중복확인</button>
            </h3>
          </div>
          <br />
          <div id="usersecretInput">
            <h3>비밀번호</h3>
            <input
              type="password"
              placeholder="패스워드를 입력하세요"
            />
          </div>
          <br />
          <div>
            <h3>
              비밀번호 확인{" "}
              <input type="password" placeholder="패스워드 확인" />
            </h3>
          </div>
          <Button>
            <button className="SignupBtn">회원가입</button>
          </Button>
        </Body>
      </SignupPage>
    </div>
  );
}