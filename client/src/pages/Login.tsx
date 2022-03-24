//import  {style} from "@vanilla-extract/css";
import "../css/Login.css";
import React from "react";

export default function Login() {
  return (
    <div className="flex_container">
      <div className="login">
        <img src="../logo.png" width="220px" alt="logo" />
      </div>
      <div className="col-center LoginWrapper">
        <h2>로그인 </h2>
        <ul>
          <li>
            아이디 <input placeholder="이메일입력" title="아이디 입력" />{" "}
          </li>
          <li>
            비밀번호{" "}
            <input
              type="password"
              placeholder="비밀번호 "
              title="비밀번호 입력"
            />
          </li>
        </ul>
        <footer className="ul-footer">
          <div className="check">
            {/* <label><span><input type="checkbox" id="회원가입"/> 다른 서비스 계정으로 로그인  </span> </label> */}
            {/* <label><span><input type="checkbox" id="회원가입"/> 계정이 없으세요? </span> </label> */}
            <a href="">계정이 없으세요?</a>
            <br />
            <a href="">다른 서비스 계정으로 로그인 </a>
          </div>
          <a href="">아이디 찾기 </a>
          <a href="">비밀번호 찾기 </a>
        </footer>
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

// const ModalContainer : CSS.Properties={

//   margin: '2.5rem',
//   height: '50rem'
//   width: '100rem',
//   display: 'flex',
//   flex-direction: 'column',
//   border: 'solid red',
// }
// export function Container({box}: {box:string}){
//   return <ModalContainer style={box}></ModalContainer>
// }
// //   > #top {
// //     margin: 1em;
// //     padding: 1em;
// //     border: solid green;
// //   }
// //   > #bottom {
// //     margin: 1em;
// //     padding-left: 0.1em;
// //     border: solid green;
// //   }
// // };
// const Headers = CSS.Properties =
//   border: solid blue;
//   display: flex;
//   justify-content: space-around;
//   > img {
//     display: flex;
//   }
// `;

// const ModalBackdrop = CSS.Properties =
//   // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
//   height: 50%;
//   width: 100%;
//   background-color: rgba(255, 109, 86, 0.5);
//   position: absolute;
// `;
// // // 로그인 버튼이 없네..? on keypress? 이벤트 핸들러로 처리
// // // 아이디 input 창

// const ModalProperties == CSS.Properties =
//   /* margin-top: -1em; */
//   top: 5em;
//   margin: 1em;
//   height: 5rem;
//   width: 5rem;
// `;

// const Button = CSS.button`
//   background-color: #00cc99;
//   opacity: 1;
//   margin-left: 1em;
//   width: 70px;
//   height: 30px;
//   border: none;
//   color: black;
//   font-size: 1em;
//   font-weight: bold;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Footer = CSS.Properties =
//   margin: 1em;
//   border: dashed blue;
//   margin: 1em;
//   height: 50%;
//   width: 100%;
// `;

// const Input = CSS.input.attrs((props) => ({
//   type: "text",
//   size: props.size || "1em",
// }))`
//   background-color: grey;
//   border: 0.5rem solid black;
//   margin: ${(props) => props.size};
//   padding: ${(props) => props.size};
// `;

// //비번 입력창
// const PasswordInput = CSS(Input).attrs({
//   type: "password",
// })`
//   // similarly, border will override Input's border
//   border: 0.5rem solid black;
// `;

// //"계정이 없으세요? useState"

//   const [userInfo, setLoginInfo] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputValue = (key :any) => (e :any) => {
//     setLoginInfo({ ...userInfo, [key]: e.target.value });
//   };
//   //input 값 설정

//   const serverURL = 'http://localhost:8080'

//   const handleGuestLogin = () => {
//     const url = `${serverURL}/login`;
//   };

//   const handleLogin = () => {
//     if (!userInfo.email || !userInfo.password) {
//       return alert("아이디와 비밀번호 모두 입력 하세요.");
//     }
//   };

// <Properties =id="container">
//   <ModalContainer>
//     <Headers>
//       <img src={require("../images/logo.png")} width="220px" alt="logo" />
//     </Headers>
//     <Properties =id="top">
//       <h3>
//         아이디 <Input placeholder="이메일입력" size="1em" />
//       </h3>
//     </Properties =
//     <Properties =id="bottom">
//       <h3>
//         비밀번호 <PasswordInput placeholder="비밀번호" size="1em" />
//       </h3>
//     </Properties =

//     <Button>입장</Button>
//     <br />
//     <Button>퇴장</Button>
//     <Footer></Footer>
//   </ModalContainer>
