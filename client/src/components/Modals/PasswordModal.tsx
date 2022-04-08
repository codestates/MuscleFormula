import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { axios_Put_User } from "../../axios";
import swal from "sweetalert";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  text-align: center;
  margin: 120px auto;
`;

export const ModalView = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  width: 310px;
  > .desc {
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;
    > .close-btn {
      color: black;
      cursor: pointer;
      text-align: right;
      margin: 0rem 1rem;
      font-size: large;
    }
    > .password-change-info {
      margin: 0.5rem 0rem 1.5rem 0rem;
      font-size: medium;
    }
    > .user-password {
      padding: 0rem 2.8rem;
    }
    > .user-password-check {
      padding: 0rem 2.8rem;
    }
    > .user-password > .input-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      > input {
        border: none;
        border-bottom: 2px solid black;
      }
      > input:focus {
        outline: none;
      }
    }
    > .user-password > p {
      color: red;
    }

    > .user-password-check > .input-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      > input {
        border: none;
        border-bottom: 2px solid black;
      }
      > input:focus {
        outline: none;
      }
    }
    > .user-password-check > p {
      color: red;
    }

    > .change-button {
      > button {
        font-size: small;
        cursor: pointer;
        background-color: white;
        border: none;
        border: solid 2px black;
        padding: 0.3rem 1rem;
        border-radius: 20px;
        margin: 0.5rem;
        width: 6rem;
      }
      > button:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;

interface PasswordModalProps {
  setPasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ setPasswordModal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    setPasswordModal((cur) => !cur);
  };

  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const matchPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  const isValidPassword = matchPassword.test(userPassword);
  const isValidPasswordCheck =
    userPassword === userPasswordCheck && userPasswordCheck !== "";
  const isAlltrue = isValidPassword && isValidPasswordCheck;

  const handleUserPassword = () => {
    if (isAlltrue) {
      const formData = new FormData();
      formData.append("password", userPassword);
      // let serverUrl = "http://localhost:4000";
      // axios.put(`${serverUrl}/user`, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     authorization: `Bearer ${user.accessToken}`,
      //   },
      // })

      axios_Put_User(formData, user.accessToken).then(() => {
        // alert("변경되었습니다");
        swal("변경되었습니다");
        setPasswordModal((cur) => !cur);
      });
    } else {
      // alert("비밀번호 양식에 맞추어 주십시오");
      swal("비밀번호 양식에 맞추어 주십시오");
    }
  };

  const changePassword = (e: string | any) => {
    setUserPassword(e.target.value);
  };
  const changePasswordCheck = (e: string | any) => {
    setUserPasswordCheck(e.target.value);
  };

  return (
    <ModalContainer>
      {isOpen === true ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <div className="desc">
              <span onClick={openModalHandler} className="close-btn">
                <i className="fa-regular fa-circle-xmark"></i>
              </span>
              <div className="password-change-info">
                변경할 비밀번호를 입력해주세요
              </div>
              <div className="user-password">
                <div className="input-container">
                  <div>비밀번호</div>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={changePassword}
                  />
                </div>
                {isValidPassword || userPassword.length === 0 ? (
                  <p> </p>
                ) : (
                  <p>
                    비밀번호는 8자 이상, 숫자, 영어, 특수문자를 하나이상 포함
                    하여야합니다
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
                  />
                </div>
                {isValidPasswordCheck || userPasswordCheck.length === 0 ? (
                  <p> </p>
                ) : (
                  <p>비밀번호가 일치하지 않습니다</p>
                )}
              </div>
              <div className="change-button">
                <button onClick={handleUserPassword}>변경하기</button>
              </div>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};
export default PasswordModal;
