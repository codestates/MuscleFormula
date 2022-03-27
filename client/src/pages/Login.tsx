import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import { useState } from "react";
import type { RootState, AppDispatch } from "../store";
import styled from "styled-components";

export const LoginBox = styled.div`
  /* 화면 중앙으로 만들기 */
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > #login-container {
    display: flex;
    flex-direction: column;
    > #greeting-container {
      padding: 2rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      > .greeting {
        max-width: 150px;
        font-size: x-large;
        font-family: "IBM Plex Sans KR", sans-serif;
      }
      > img {
        width: 50px;
        height: 50px;
      }
    }
    > #user-container {
      padding: 0rem 2rem;
      > .user-input-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 1.2rem;
        > div {
          width: 4.5rem;
          padding-right: 0.5rem;
        }
        > input {
          border: none;
          border-bottom: 2px solid black;
          font-size: medium;
        }
        > input:focus {
          outline: none;
        }
      }
      > .button-container {
        margin: 2rem 0rem 0.5rem 0rem;
        display: flex;
        justify-content: center;
        > button {
          width: 100%;
          height: 2rem;
          border-radius: 10px;
          border: none;
          font-size: medium;
          font-weight: bold;
          background-color: #00cc99;
        }
      }
      > .signup-container{
        font-size: small;
        > .signup-link {
          text-decoration: none;
          color: #00cc99;
          &:focus,
          &:hover,
          &:visited,
          &link,
          &:active {
            text-decoration: none;
            color: #00cc99;
          }
        }
      }
    }
    > #oauth-container {
      padding: 1rem 2rem;
      > tr {
        > th {
          > img {
            width: 30px;
          }
        }
        > td, th {
          font-size: small;
          text-align: center;
          color: grey;
        }
      }
    }
  }
`;

export default function LoginTest() {
  const user = useSelector((state: RootState) => state.userInfo.userInfo);
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, serUserPassword] = useState("");

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
    let serverURL = "http://localhost:4000";

    axios.post(`${serverURL}/sign/in`, loginUserinfo,{
      withCredentials: true
    }
    
    ).then((res) => {
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
    <LoginBox>
      <div id="login-container">
        <div id="greeting-container">
          <div className="greeting">오늘도 힘차게 운동해볼까요?</div>
          <img src="../images/icon_exerciseman.png" alt="exercising_man" />
        </div>
        <div id="user-container">
            <div className="user-input-container">
              <div>아이디</div>
              <input type="text" placeholder="아이디를 입력해주세요" onChange={changeEmail}/>
            </div>
            <div className="user-input-container">
              <div>비밀번호</div>
              <input type="password" placeholder="비밀번호를 입력해주세요" onChange={changePassword}/>
            </div>
            <div className="button-container">
              <button onClick={loginHangle}>로그인</button>
            </div>
            <div className="signup-container">
              아이디가 없으시나요? <Link className="signup-link" to='/signup'>회원가입</Link>
            </div>
          </div>
          <table id="oauth-container">
            <tr>
              <th>
              <img
              src="../images/icon_google.png"
              alt="logoGoogle"
              onClick={() => {
                console.log("google");
              }}
              />
              </th>
              <th>
              <img
              src="../images/icon_kakao.png"
              alt="logoKakao"
              onClick={() => {
                console.log("kakao");
              }}
              />
              </th>
            </tr>
            <tr>
              <td>
                구글로 로그인
              </td>
              <td>
                카카오로 로그인
              </td>
            </tr>
          </table>
        </div>
    </LoginBox>
  );
}
