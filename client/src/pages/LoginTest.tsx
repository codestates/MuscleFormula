import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import { useState } from "react";
import type { RootState, AppDispatch } from "../store";
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
    > .userLonginInfo {
      > div > input {
      }
      > .userId {
        > div {
        }
      }
      > .userPassword {
        > div {
        }
      }
      > .loginButten {
        > button {
        }
      }
    }
    > #oAuth {
      > img {
        width: 50px;
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

    axios
      .post(`${serverURL}/sign/in`, loginUserinfo, { withCredentials: true })
      .then((res) => {
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
            <div>
              아이디가 없으시나요? <Link to='/signup'>회원가입</Link>
            </div>
          </div>
          <table id="oAuth">
            <tr>
              <th>
              <img
              id="logo_google"
              src="../images/icon_google.png"
              alt="logoGoogle"
              onClick={() => {
                console.log("google");
              }}
              />
              </th>
              <th>
              <img
              id="logo_kakao"
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
      </Main>
    </div>
  );
}
