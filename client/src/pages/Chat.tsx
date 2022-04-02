import "../css/Chat.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import NeedLogin from "../components/NeedLogin";

export default function Chat() {
  let isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const localLogin = localStorage.getItem('isLogin');
  if (localLogin !== null) {
    isLogin = JSON.parse(localLogin);
  }
  return (
    <div>
      {isLogin === false
      ? 
      <div id="no-chat-container">
        <NeedLogin/>
      </div>
      : 
      <div id="chat-container">
        채팅가능
      </div>}
    </div>
  )
}