import "../css/Chat.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import NeedLogin from "../components/NeedLogin";
import styled from "styled-components";
const io = require("socket.io-client");
const socket = io();
console.log("socket: ", socket);
export const Body = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;
  border: 1px solid red;
  display: flex;
  height: 30rem;
  > #chat-title {
    border: 1px solid red;
    flex: 1 0 auto;
  }
  > #chat-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid red;
    flex: 7 0 auto;
    > #content-block {
      border: 1px solid gray;
      flex: 1 0 auto;
    }
    > #chat-block {
      /* flex: 1 0 auto; */
      display: flex;
      height: 30px;
      justify-content: space-between;
    }
  }
`;

export default function Chat() {
  let isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const localLogin = localStorage.getItem("isLogin");
  if (localLogin !== null) {
    isLogin = JSON.parse(localLogin);
  }
  return (
    <div>
      {isLogin === false ? (
        <div id="no-chat-container">
          <NeedLogin />
        </div>
      ) : (
        <div id="chat-container-수정">
          <Body>
            <div id="chat-title">
              <ul>
                <li>
                  <div>헬창모임</div>
                </li>
                <li>
                  <div>서울모임</div>
                </li>
                <li>
                  <div>경기모임</div>
                </li>
              </ul>
            </div>
            <div id="chat-content">
              <div id="content-block">내용</div>
              <div id="chat-block">
                <div>내용</div>
                <button>submit</button>
              </div>
            </div>
          </Body>
        </div>
      )}
    </div>
  );
}
