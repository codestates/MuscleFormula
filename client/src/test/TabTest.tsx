import "../css/Mypage.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import TodayRecord from "../components/TodayRecord";
import PostThumbnail from "../components/PostThumbnail";
import { useState, useEffect } from "react";
import { axios_GetMyPosts } from "../axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../slideSetting";
import NoPost from "../components/NoPost";
import styled from 'styled-components';

export const TabMenu = styled.ul`
  background-color: #f2f2f2;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
  }

  .focused {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #00cc99;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

export const Desc = styled.div`
  text-align: center;
`;

export const UpperTab = () => {
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  const [myPosts, setMyPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [lastTime, setLastTime] = useState('');
  const [todayTime, setTodayTime] = useState('');
  const [bestTime, setBestTime] = useState('');

  useEffect(() => {
    axios_GetMyPosts(user.accessToken)
    .then((res) => {
      console.log('콘솔',res.data);
      setMyPosts(res.data.mypageData.myPost);
      setLastTime(res.data.mypageData.users.exerciseInfo.LastTime);
      setTodayTime(res.data.mypageData.users.exerciseInfo.todayTime);
      setBestTime(res.data.mypageData.users.exerciseInfo.bestTime);
    });
  }, []);
  return (
    <div>
      {/* <TabTest myPost={} likedPost={}/> */}
    </div>
  )
}


interface TabTestProps {
  myPost : {};
  likedPost : {};
}
const TabTest:React.FC<TabTestProps> = ({ myPost, likedPost }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: '공유한 포스팅', content: myPost },
    { name: '좋아요한 포스팅', content: likedPost },
  ];

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? 'submenu focused' : 'submenu'}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          {/* <PostThumbnail postThumb = {menuArr[currentTab].content}/> */}
        </Desc>
      </div>
    </>
  );
};