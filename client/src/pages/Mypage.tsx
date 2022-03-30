/**마이 페이지**/
import "../css/Mypage.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Maypage() {
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }
  return (
    <div id="mypage-container">
      <header className="mypage-greeting">
        안녕하세요 <strong>{user.nickname}</strong> 님
      </header>
      <div className="share-container">
        아직 공유한 운동이 없으시네요. 어서 공유해보세요!
      </div>
    </div>
  );
}
