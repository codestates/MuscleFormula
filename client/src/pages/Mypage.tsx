/**마이 페이지**/
import { PC, Mobile } from "../mediaQuery";
import Footer from "../components/Footer";
import "../css/Mypage.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import TodayRecord from "../components/TodayRecord";
import Share from "./Share";
import PostThumbnail from "../components/PostThumbnail";
import { useState, useEffect } from "react";
import { axios_GetMyPosts } from "../axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../slideSetting";
import NoPost from "../components/NoPost";
import axios from "axios";
import MyPostTab from "../components/MyPostTab";
import { axios_Get_Like } from "../axios";

export default function Maypage() {
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  const [myPosts, setMyPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [lastTime, setLastTime] = useState("");
  const [todayTime, setTodayTime] = useState("");
  const [bestTime, setBestTime] = useState("");

  useEffect(() => {
    axios_GetMyPosts(user.accessToken).then((res) => {
      setMyPosts(res.data.mypageData.myPost);
      setLastTime(res.data.mypageData.users.exerciseInfo.LastTime);
      setTodayTime(res.data.mypageData.users.exerciseInfo.todayTime);
      setBestTime(res.data.mypageData.users.exerciseInfo.bestTime);
    });
  }, []);

  useEffect(() => {
    // let serverUrl = `http://localhost:4000`;
    // axios.get(`${serverUrl}/like`, {
    //   headers: {
    //     authorization: `Bearer ${user.accessToken}`
    //   }
    // })
    axios_Get_Like(user.accessToken).then((res: any) => {
      setLikedPosts(res.data);
    });
  }, []);

  return (
    <div id="mypage-container">
      <div className="myinfo-container">
        <div className="welcome">
          안녕하세요 <strong>{user.nickname}</strong> 님
        </div>
        <div className="my-record">
          <TodayRecord
            lastTime={lastTime}
            todayTime={todayTime}
            bestTime={bestTime}
          />
        </div>
      </div>
      <div className="mypost-container">
        <div className="mypost">
          {myPosts.length > 0 ? (
            <MyPostTab myPosts={myPosts} likedPosts={likedPosts} />
          ) : (
            <NoPost />
          )}
        </div>
      </div>
      <div className="share-container">
        <Share />
      </div>
    </div>
  );
}
