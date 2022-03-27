import React from "react";
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
display: flex;
 
background-color: #00cc99;
cursor: pointer;
margin: 0.5rem;
font-size: 10px;
width: 5vw;
height: 5vh;
font-size: 0.5rem;
&:hover {
        background-color: white;
        color: black;
      } 
/* > button:hover {
  color: #00ffcc; 
} */
`;



export default function Signup() {
  return (
    <SignupPage>
      <Headers>
          <img className="image" src="images/logo.png" width="150vw" alt="logo" />
        </Headers>
        <Body className="modal">
        <div></div>
        <div><h1>회원 가입</h1></div>
          <div>
              이메일
              <input type ="test" placeholder="이메일을 입력하세요 "  />
            </div>
                 <div>nickname <input type="text" placeholder="닉네임을 적어주세요" />
                 </div>
                 
                 <div><button>중복확인</button>
            </div>
            <div>비밀번호
            <input
              type="password"
              placeholder="패스워드를 입력하세요"
            /></div>
            
            <div className="input-box">
            <span className="details">패스워드 확인</span>
            <input
            type="password"
            placeholder="똑같은 패스워드를 입력하세요"
          />
          </div> 
        
          <br />
           <Button>
             회원가입 
          </Button>
         
        </Body>
    </SignupPage>
  )
}
  //유저 정보, 관리
  //함수 만들필요없다.
  //



