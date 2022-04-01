import axios from "axios";
import React from "react";
import { Mobile, PC } from "../mediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import { useState, useEffect } from "react";
import type { RootState, AppDispatch } from "../store";
import styled from "styled-components";
const qs = require("qs");

export const LoginPC = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > #login-container-left {
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;
    > #greeting-container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      padding-bottom: 1.8rem;
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
    > #oauth-container {
      > tbody > tr {
        > th {
          cursor: pointer;
        }
        > th,
        td {
          font-size: small;
          text-align: center;
          color: grey;
        }
      }
    }
  }
  > #login-container-right {
    display: flex;
    flex-direction: column;
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
          cursor: pointer;
          width: 100%;
          height: 2rem;
          border-radius: 10px;
          border: none;
          font-size: medium;
          font-weight: bold;
          background-color: #00cc99;
          cursor: pointer;
        }
      }
      > .signup-container {
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
  }
`;
export const LoginMobile = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex: column;
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
          cursor: pointer;
          width: 100%;
          height: 2rem;
          border-radius: 10px;
          border: none;
          font-size: medium;
          font-weight: bold;
          background-color: #00cc99;
          cursor: pointer;
        }
      }
      > .signup-container {
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
      > tbody > tr {
        > th {
          cursor: pointer;
        }
        > th,
        td {
          font-size: small;
          text-align: center;
          color: grey;
        }
      }
    }
  }
`;

export default function Login() {
  const kakao = {
    clientID: "7d8937ab746c6e3604651e33e259fc1d",
    clientSecret: "3pCkUe5V6jQXCFVEgJCXV7HxZNz0LOub",
    redirectUri: "http://localhost:3000/login",
  };

  const user = useSelector((state: RootState) => state.userInfo.userInfo);
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [getcode, setGetcode] = useState("");

  const googleCodeGetRUI = `https://accounts.google.com/o/oauth2/auth?client_id=1062811618314-04ajm3grgt3c9hf51lq1911qt3el9ro9.apps.googleusercontent.com&access_type=offline&redirect_uri=http://localhost:3000/callbackGoogle&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
  const kakaoCodeGetURI = `https://kauth.kakao.com/oauth/authorize?client_id=7d8937ab746c6e3604651e33e259fc1d&redirect_uri=http://localhost:3000/callbackKakao&response_type=code`;
  const code: any = new URLSearchParams(window.location.search).get("code");
  console.log("받음 code :", code);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const loginHangle = async () => {
    const loginUserinfo = {
      email: userEmail,
      password: userPassword,
    };

    axios
      .post(`http://localhost:4000/sign/in`, loginUserinfo, {
        withCredentials: true,
      })
      .then((res) => {
        const { id, image, nickname } = res.data.user;
        const accessToken = res.data.accessToken;
        dispatch(
          LOG_IN({
            id,
            nickname,
            image,
            accessToken,
          })
        );
        navigate("/main");
      });
  };
  const loginKakaoHangle = async () => {
    // console.log("kakao");
    // axios.get(kakaoCodeGetURI).then((res) => {
    //   console.log("res", res);
    // });
  };

  const changeEmail = (e: string | any) => {
    setUserEmail(e.target.value);
  };
  const changePassword = (e: string | any) => {
    setUserPassword(e.target.value);
  };

  return (
    <div>
      <PC>
        <LoginPC>
          <div id="login-container-left">
            <div id="greeting-container">
              <div className="greeting">오늘도 힘차게 운동해볼까요?</div>
              <img src="../images/icon_weightlifting.png" alt="exercising_man" />
            </div>
            <table id="oauth-container">
              <tbody>
              <tr>
                <th>
                  <a href={googleCodeGetRUI}>
                    <img src="../images/icon_google.png" alt="logoGoogle" />
                  </a>
                </th>
                <th>
                  <a href={kakaoCodeGetURI}>
                    <img
                      src="../images/icon_kakao.png"
                      alt="logoKakao"
                      onClick={() => {
                        console.log("kakao");
                      }}
                    />
                  </a>
                </th>
              </tr>
              <tr>
                <td>구글로 로그인</td>
                <td>카카오로 로그인</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div id="login-container-right">
            <div id="user-container">
              <div className="user-input-container">
                <div>아이디</div>
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  onChange={changeEmail}
                />
              </div>
              <div className="user-input-container">
                <div>비밀번호</div>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={changePassword}
                />
              </div>
              <div className="button-container">
                <button onClick={loginHangle}>로그인</button>
              </div>
              <div className="signup-container">
                아이디가 없으시나요?{" "}
                <Link className="signup-link" to="/signup">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </LoginPC>
      </PC>
      <Mobile>
        <LoginMobile>
          <div id="login-container">
            <div id="greeting-container">
              <div className="greeting">오늘도 힘차게 운동해볼까요?</div>
              <img src="../images/icon_weightlifting.png" alt="exercising_man" />
            </div>
            <div id="user-container">
              <div className="user-input-container">
                <div>아이디</div>
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  onChange={changeEmail}
                />
              </div>
              <div className="user-input-container">
                <div>비밀번호</div>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={changePassword}
                />
              </div>
              <div className="button-container">
                <button onClick={loginHangle}>로그인</button>
              </div>
              <div className="signup-container">
                아이디가 없으시나요?{" "}
                <Link className="signup-link" to="/signup">
                  회원가입
                </Link>
              </div>
            </div>
            <table id="oauth-container">
              <tbody>
              <tr>
                <th>
                  <a href={googleCodeGetRUI}>
                    <img src="../images/icon_google.png" alt="logoGoogle" />
                  </a>
                </th>
                <th>
                  <a href={kakaoCodeGetURI}>
                    <img
                      src="../images/icon_kakao.png"
                      alt="logoKakao"
                      onClick={() => {
                        console.log("kakao");
                      }}
                    />
                  </a>
                </th>
              </tr>
              <tr>
                <td>구글로 로그인</td>
                <td>카카오로 로그인</td>
              </tr>
              </tbody>
            </table>
          </div>
        </LoginMobile>
      </Mobile>
    </div>
  );
}
