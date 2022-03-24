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
      > .userId {
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
      > .loginButten {
        padding: 10px;
        margin-top: 60px;
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
      > img {
        width: 50px;
      }
    }
  }
`;

export default function LoginTest() {
  const test = useSelector((state: RootState) => state.test.test);
  const count = useSelector((state: RootState) => state.counter.count);
  const user = useSelector((state: RootState) => state.userInfo.userInfo);
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, serUserPassword] = useState("");

  console.log("longin test페이지");
  console.log("테스트용", test);
  console.log("카운터", count);
  console.log("유저정보", user);
  console.log("로그인", isLogin);

  const navigate = useNavigate();

  let dispatch: AppDispatch = useDispatch();

  const loginHangle = async () => {
    const loginUserinfo = {
      email: userEmail,
      password: userPassword,
    };
    console.log("login info : ", loginUserinfo);
    let serverURL = "https://021c-112-168-33-55.ngrok.io";

    axios.post(`${serverURL}/sign/in`, loginUserinfo,{withCredentials:true}).then((res) => {
      console.log("받은 유저정보:", res);
      console.log("받은 유저정보:", res);

      const { id, image, nickname } = res.data.user;
      dispatch(
        LOG_IN({
          id,
          nickname,
          image,
        })
      );
      navigate("/main");
    });
  };

  const changeEmail = (e: string | any) => {
    setUserEmail(e.target.value);
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
            <div className="userId">
              <div>아이디</div>
              <input type="text" onChange={changeEmail}></input>
            </div>
            <div className="userPassword">
              <div>비밀번호</div>
              <input type="password" onChange={changePassword}></input>
            </div>
            <div className="loginButten">
              <button onClick={loginHangle}>로그인</button>
            </div>
            <div
              onClick={() => {
                navigate("/signup");
              }}
            >
              아이디가 없으시나요?
            </div>
          </div>
          <div id="oAuth">
            <img
              id="logo_google"
              src="../images/icon_google.png"
              alt="logoGoogle"
              onClick={() => {
                console.log("google");
              }}
            />
            <img
              id="logo_kakao"
              src="../images/icon_kakao.png"
              alt="logoKakao"
              onClick={() => {
                console.log("kakao");
              }}
            />
          </div>
        </div>
      </Main>
    </div>
  );
}
