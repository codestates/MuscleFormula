import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { axios_Signup, axios_GetNickname } from "../axios";

export const Main = styled.div`
  border: 3px solid green;
  padding: 10px;
  /* 화면 중앙으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > #signup-container {
    border: 3px solid green;
    padding: 10px;
    height: 60vh;
    width: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
    > .user-signup-container {
      /* border: 3px solid green; */
      padding: 10px;
      height: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      > p {
        color: red;
      }
      > div > input {
        padding: 10px;
        margin-left: 10px;
      }
      > .userEmail {
        padding: 10px;
        display: flex;
        > div {
          padding: 10px;
          width: 90px;
          text-align: center;
        }
      }
      > .userNick {
        padding: 10px;
        display: flex;
        > div {
          padding: 10px;
          width: 90px;
          text-align: center;
        }
      }
      > .userPassword {
        display: flex;
        padding: 10px;
        > div {
          padding: 10px;
          width: 90px;
          text-align: center;
        }
      }
      > .userPasswordCheck {
        display: flex;
        padding: 10px;
        > div {
          padding: 10px;
          width: 90px;
          text-align: center;
        }
      }
      > .signUpButten {
        padding: 10px;
        margin-top: 0px;
        display: flex;
        justify-content: center;
        > button {
          padding: 10px;
          width: 110px;
        }
      }
    }
    > #oAuth {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export default function LoginTest() {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.counter.count);
  const user = useSelector((state: RootState) => state.userInfo.userInfo);
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userPassword, serUserPassword] = useState("");
  const [userPasswordCheck, serUserPasswordCheck] = useState("");
  const [userNicknameCheck, serUserNicknameCheck] = useState(false);

  const matchEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const matchPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  // console.log("signUp test페이지");
  // console.log("카운터", count);
  // console.log("유저정보", user);
  // console.log("로그인", isLogin);
  const navigate = useNavigate();

  const isValidEmail = matchEmail.test(userEmail);
  const isValidPassword = matchPassword.test(userPassword);
  const isValidPasswordCheck =
    userPassword === userPasswordCheck && userPasswordCheck !== "";
  const isAlltrue =
    isValidEmail &&
    isValidPassword &&
    isValidPasswordCheck &&
    userNicknameCheck;

  const signupHandle = () => {
    if (isAlltrue) {
      axios_Signup(userEmail, userNickname, userPassword)
        .then(() => {
          navigate("/login");
        })
        .catch(() => {
          alert("중복된 이메일이 있습니다");
        });
    } else {
      alert("회원가입 조건을 모두 맞추어 주십시오");
    }
  };

  const changeEmail = (e: string | any) => {
    setUserEmail(e.target.value);
  };
  const changeNickname = async (e: string | any) => {
    setUserNickname(e.target.value);
  };

  useEffect(() => {
    axios_GetNickname(userNickname).then((res) => {
      serUserNicknameCheck(!(res.data.length > 0) && userNickname.length > 0);
    });
  }, [userNickname]);

  const changePassword = (e: string | any) => {
    serUserPassword(e.target.value);
  };
  const changePasswordCheck = (e: string | any) => {
    serUserPasswordCheck(e.target.value);
  };
  return (
    <div id="LoginPage">
      <Main>
        <div id="signup-container">
          {/* <img id="logo" src="../logo.png" alt="logo" /> */}

          <div className="user-signup-container">
            <div className="userEmail">
              <div>이메일</div>
              <input type="text" onChange={changeEmail}></input>
            </div>
            {isValidEmail ? <p></p> : <p>이메일의 형식에 맞게 적어주세요</p>}
            <div className="userNick">
              <div>닉네임</div>
              <input type="text" onChange={changeNickname}></input>
            </div>
            {userNicknameCheck ? <p> </p> : <p>동일한 닉네임이 존재합니다</p>}

            <div className="userPassword">
              <div>비밀번호</div>
              <input type="text" onChange={changePassword}></input>
            </div>
            {isValidPassword ? (
              <p> </p>
            ) : (
              <p>
                비밀번호는 8자 이상, 숫자, 영어, 특수문자를 하나이상 포함 하여야
                합니다
              </p>
            )}

            <div className="userPasswordCheck">
              <div>비밀번호 확인</div>
              <input type="password" onChange={changePasswordCheck}></input>
            </div>
            {isValidPasswordCheck ? (
              <p> </p>
            ) : (
              <p>비밀번호가 일치하지 않습니다</p>
            )}

            <div className="signUpButten">
              <button onClick={signupHandle}>회원가입</button>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}