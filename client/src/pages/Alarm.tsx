import "../css/Alarm.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import NeedLogin from "../components/NeedLogin";

export default function Alarm() {
  let isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const localLogin = localStorage.getItem('isLogin');
  if (localLogin !== null) {
    isLogin = JSON.parse(localLogin);
  }
  return (
    <div>
      {isLogin === false
      ? 
      <div id="no-alarm-container">
        <NeedLogin/>
      </div>
      : 
      <div id="alarm-container">
        알림을 살펴봅시다
      </div>}
    </div>
  )
}