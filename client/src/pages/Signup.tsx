import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PLUS, MINUS, CHOICE } from "../reducer/counterReducer";
import { ADD, QUAN, OUT } from "../reducer/testReducer";
import { LOG_IN, LOG_OUT } from "../reducer/userInfoReducer";
import { useState } from "react";
import type { RootState, AppDispatch } from "../store";
import StarPoint from "../components/StarPoint";
import styled from "styled-components";
export const Main = styled.div`
  border: 3px solid green;
  padding: 10px;
  /* 화면 중앙으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > #innerBox {
    border: 3px solid green;
    padding: 10px;
    height: 60vh;
    width: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
    > .userLonginInfo {
      /* border: 3px solid green; */
      padding: 10px;
      height: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
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
  const count = useSelector((state: RootState) => state.counter.count);
  const user = useSelector((state: RootState) => state.userInfo.userInfo);
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userPassword, serUserPassword] = useState("");
  // const [userPasswordCheck, serUserPasswordCheck] = useState("");

  // console.log("signUp test페이지");
  // console.log("카운터", count);
  // console.log("유저정보", user);
  // console.log("로그인", isLogin);
  const navigate = useNavigate();

  let dispatch: AppDispatch = useDispatch();

  const signupHandle = async () => {
    let serverURL = "http://localhost:4000";

    axios
      .post(
        `${serverURL}/sign/up`,
        {
          email: userEmail,
          nickname: userNickname,
          password: userPassword,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      });

    navigate("/login");
  };
  const changeEmail = (e: string | any) => {
    setUserEmail(e.target.value);
  };
  const changeNickname = (e: string | any) => {
    setUserNickname(e.target.value);
  };
  const changePassword = (e: string | any) => {
    serUserPassword(e.target.value);
  };

  return (
    <div id="LoginPage">
      <Main>
        <div id="innerBox">
          <img id="logo" src="../logo.png" alt="logo" />

          <div className="userLonginInfo">
            <div className="userEmail">
              <div>이메일</div>
              <input type="text" onChange={changeEmail}></input>
            </div>
            <div className="userNick">
              <div>닉네임</div>
              <input type="text" onChange={changeNickname}></input>
              <button>
                중복<br></br>확인
              </button>
            </div>
            <div className="userPassword">
              <div>비밀번호</div>
              <input type="password" onChange={changePassword}></input>
            </div>
            <div className="userPasswordCheck">
              <div>비밀번호 확인</div>
              <input type="password"></input>
            </div>
            <div className="signUpButten">
              <button onClick={signupHandle}>회원가입</button>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}