import swal from "sweetalert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { axios_Signup, axios_GetNickname, axios_Login } from "../axios";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
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
  const matchEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const matchPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

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
            // alert("????????? ???????????? ????????????");
            swal("????????? ???????????? ????????????");
          });
      });
    } else {
      // alert("???????????? ????????? ?????? ????????? ????????????");
      swal("???????????? ????????? ?????? ????????? ????????????");
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
        <div className="greeting">
          <div className="headline">
            ????????? ??????<br></br>
            ???????????????????
          </div>
          <img src="../images/icon_running.png" alt="running_man" />
        </div>
        <div className="user-email">
          <div className="input-container">
            <div>?????????</div>
            <input
              type="text"
              placeholder="???????????? ??????????????????"
              onChange={changeEmail}
            ></input>
          </div>
          {isValidEmail || userEmail.length === 0 ? (
            <p></p>
          ) : (
            <p>???????????? ????????? ?????? ???????????????</p>
          )}
        </div>
        <div className="user-nickname">
          <div className="input-container">
            <div>?????????</div>
            <input
              type="text"
              placeholder="???????????? ??????????????????"
              onChange={changeNickname}
            ></input>
          </div>
          {userNicknameCheck ? <p> </p> : <p>????????? ???????????? ???????????????</p>}
        </div>
        <div className="user-password">
          <div className="input-container">
            <div>????????????</div>
            <input
              type="password"
              placeholder="??????????????? ??????????????????"
              onChange={changePassword}
            ></input>
          </div>
          {isValidPassword || userPassword.length === 0 ? (
            <p> </p>
          ) : (
            <p>
              ??????????????? 8??? ??????, ??????, ??????, ??????????????? ???????????? ?????? ?????????
              ?????????
            </p>
          )}
        </div>
        <div className="user-password-check">
          <div className="input-container">
            <div>???????????? ??????</div>
            <input
              type="password"
              placeholder="??????????????? ??????????????????"
              onChange={changePasswordCheck}
            ></input>
          </div>
          {isValidPasswordCheck || userPasswordCheck.length === 0 ? (
            <p> </p>
          ) : (
            <p>??????????????? ???????????? ????????????</p>
          )}
        </div>
        <div className="signup-button">
          <button onClick={signupHandle}>????????????</button>
        </div>
      </div>
    </SignupContainer>
  );
}
