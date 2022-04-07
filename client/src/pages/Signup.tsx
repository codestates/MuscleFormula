// 시작하자마자 보이는 뻘건색 삭제
import Swal from "sweetalert2";
import { PC, Mobile } from "../mediaQuery";
import Footer from "../components/Footer";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { axios_Signup, axios_GetNickname, axios_Login } from "../axios";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { LOG_IN } from "../reducer/userInfoReducer";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  min-height: 90vh;
  > #signup-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    > .greeting {
      padding: 2rem 1.2rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      > .headline {
        width: 10rem;
        font-size: x-large;
        font-family: "IBM Plex Sans KR", sans-serif;
      }
    }
    > .user-email {
      padding: 0.5rem 1rem;
      > .input-container {
        display: flex;
        flex-direction: row;
        > div {
          width: 6rem;
          font-weight: bold;
        }
        > input {
          font-size: medium;
          border: none;
          border-bottom: solid 2px black;
        }
        > input:focus {
          outline: none;
        }
      }
      > p {
        font-size: small;
        color: red;
      }
    }
    > .user-nickname {
      padding: 0.5rem 1rem;
      > .input-container {
        display: flex;
        flex-direction: row;
        > div {
          width: 6rem;
          font-weight: bold;
        }
        > input {
          font-size: medium;
          border: none;
          border-bottom: solid 2px black;
        }
        > input:focus {
          outline: none;
        }
      }
      > p {
        font-size: small;
        color: red;
      }
    }
    > .user-password {
      padding: 0.5rem 1rem;
      > .input-container {
        display: flex;
        flex-direction: row;
        > div {
          width: 6rem;
          font-weight: bold;
        }
        > input {
          font-size: medium;
          border: none;
          border-bottom: solid 2px black;
        }
        > input:focus {
          outline: none;
        }
      }
      > p {
        font-size: small;
        color: red;
      }
    }
    > .user-password-check {
      padding: 0.5rem 1rem;
      > .input-container {
        display: flex;
        flex-direction: row;
        > div {
          width: 6rem;
          font-weight: bold;
        }
        > input {
          font-size: medium;
          border: none;
          border-bottom: solid 2px black;
        }
        > input:focus {
          outline: none;
        }
      }
      > p {
        font-size: small;
        color: red;
      }
    }
    > .signup-button {
      padding: 1rem;
      > button {
        cursor: pointer;
        width: 100%;
        height: 2rem;
        border-radius: 10px;
        border: none;
        font-size: medium;
        font-weight: bold;
        background-color: #00cc99;
      }
    }
  }
`;

export default function Signup() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userPassword, serUserPassword] = useState("");
  const [userPasswordCheck, serUserPasswordCheck] = useState("");
  const [userNicknameCheck, serUserNicknameCheck] = useState(true);
  console.log("userNicknameCheck:", userNicknameCheck);
  const matchEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const matchPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  // console.log("signUp test페이지");
  // console.log("카운터", count);
  // console.log("유저정보", user);
  // console.log("로그인", isLogin);

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
      axios_Signup(userEmail, userNickname, userPassword).then(() => {
        axios_Login(userEmail, userPassword)
          .then((res) => {
            const { id, image, nickname, loginType } = res.data.user;
            const accessToken = res.data.accessToken;
            console.log("회원가입로그인", res.data);
            dispatch(
              LOG_IN({
                id,
                nickname,
                image,
                accessToken,
                loginType,
              })
            );
            navigate("/main");
          })
          .catch(() => {
            // alert("중복된 이메일이 있습니다");
            Swal.fire("중복된 이메일이 있습니다");
          });
      });
    } else {
      // alert("회원가입 조건을 모두 맞추어 주십시오");
      Swal.fire("회원가입 조건을 모두 맞추어 주십시오");
    }
  };

  const changeEmail = (e: string | any) => {
    setUserEmail(e.target.value);
  };
  const changeNickname = (e: string | any) => {
    setUserNickname(e.target.value);
  };

  useEffect(() => {
    axios_GetNickname(userNickname)
      .then((res) => {
        console.log("nickname res :", res);
        serUserNicknameCheck(true);
      })
      .catch((err) => {
        serUserNicknameCheck(false);
      });
  }, [userNickname]);

  const changePassword = (e: string | any) => {
    serUserPassword(e.target.value);
  };
  const changePasswordCheck = (e: string | any) => {
    serUserPasswordCheck(e.target.value);
  };
  return (
    <SignupContainer>
      <div id="signup-container">
        {/* <img id="logo" src="../logo.png" alt="logo" /> */}
        <div className="greeting">
          <div className="headline">
            매일의 운동<br></br>
            시작해볼까요?
          </div>
          <img src="../images/icon_running.png" alt="running_man" />
        </div>
        <div className="user-email">
          <div className="input-container">
            <div>이메일</div>
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={changeEmail}
            ></input>
          </div>
          {isValidEmail || userEmail.length === 0 ? (
            <p></p>
          ) : (
            <p>이메일의 형식에 맞게 적어주세요</p>
          )}
        </div>
        <div className="user-nickname">
          <div className="input-container">
            <div>닉네임</div>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={changeNickname}
            ></input>
          </div>
          {userNicknameCheck ? <p> </p> : <p>동일한 닉네임이 존재합니다</p>}
        </div>
        <div className="user-password">
          <div className="input-container">
            <div>비밀번호</div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={changePassword}
            ></input>
          </div>
          {isValidPassword || userPassword.length === 0 ? (
            <p> </p>
          ) : (
            <p>
              비밀번호는 8자 이상, 숫자, 영어, 특수문자를 하나이상 포함 하여야
              합니다
            </p>
          )}
        </div>
        <div className="user-password-check">
          <div className="input-container">
            <div>비밀번호 확인</div>
            <input
              type="password"
              placeholder="비밀번호를 확인해주세요"
              onChange={changePasswordCheck}
            ></input>
          </div>
          {isValidPasswordCheck || userPasswordCheck.length === 0 ? (
            <p> </p>
          ) : (
            <p>비밀번호가 일치하지 않습니다</p>
          )}
        </div>
        <div className="signup-button">
          <button onClick={signupHandle}>회원가입</button>
        </div>
      </div>
    </SignupContainer>
  );
}
