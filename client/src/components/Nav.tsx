//state 관리
import { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { LOG_OUT } from "../reducer/userInfoReducer";
import { RESET } from "../reducer/shareReducer";
//style
import { Mobile, PC } from "../mediaQuery";
import styled from "styled-components";
//router
import { Link, useNavigate } from "react-router-dom";

export const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  color: black;
`;
export const Foot = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  color: black;
`;

export const NavPC = styled.nav`
  height: 5rem;
  padding: 1rem;
  background: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  > .nav-title {
    flex: none;
    margin-right: 5rem;
    font-size: 2rem;
    font-family: "IBM Plex Sans KR", sans-serif;
    > #logo {
      margin-left: 1rem;
      width: 50px;
      vertical-align: middle;
    }
  }
  > .nav-menu {
    list-style-type: none;
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &link,
    &:active {
      text-decoration: none;
      color: black;
    }
    > li {
      display: inline;
      padding: 1rem;
      > img {
        width: 18px;
      }
    }
    > li:hover {
      transition:all .3s ease;
      color: #00cc99;
    }
  }
  > .nav-user {
    cursor: pointer;
    margin-left: auto;
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &link,
    &:active {
      text-decoration: none;
      color: black;
    }
    > .profile-container {
      position: relative;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      overflow: hidden;
      background-color: white;
      > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &:hover .nav-user-content {
      display: block;
    }
    > .nav-user-content {
      display: none;
      list-style-type: none;
      position: absolute;
      right: 0;
      background-color: white;
      min-width: 100px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 100;
      > li {
        padding: 0.5rem;
      }
      > li:hover {
        background-color: #00cc99;
      }
    }
    > .nav-user-login:hover {
      color: #00cc99;
    }
  }
`;
export const UpNavMobile = styled.nav`
  height: 4.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  > .nav-title {
    flex: none;
    margin-right: auto;
    font-size: 1.5rem;
    font-family: "IBM Plex Sans KR", sans-serif;
    > #logo {
      margin-left: 1rem;
      width: 40px;
      vertical-align: middle;
    }
  }
  > .nav-user {
    cursor: pointer;
    margin-left: auto;
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &link,
    &:active {
      text-decoration: none;
      color: black;
    }
    > .profile-container {
      position: relative;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      overflow: hidden;
      background-color: white;
      > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &:hover .nav-user-content {
      display: block;
    }
    > .nav-user-content {
      display: none;
      list-style-type: none;
      position: absolute;
      right: 0;
      background-color: white;
      min-width: 100px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 100;
      > li {
        padding: 0.5rem;
      }
      > li:hover {
        background-color: #00cc99;
      }
    }
    > .nav-user-login:hover {
      color: #00cc99;
    }
  }
`;
export const DownNavMobile = styled.nav`
  height: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.2);
  > .nav-menu {
    list-style-type: none;
    flex: none;
    padding: 0.5rem;
    cursor: pointer;
    img {
      width: 2rem;
    }
  }
`;

export default function Nav() {
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  let isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const localUser = localStorage.getItem('userInfo');
  const localLogin = localStorage.getItem('isLogin');
  if (localUser !== null ) {
    user = JSON.parse(localUser);
  };
  if (localLogin !== null) {
    isLogin = JSON.parse(localLogin);
  }

  //dispatch 정의
  let dispatch: AppDispatch = useDispatch();

  //useHistory 대신 useNavigate사용함
  const navigate = useNavigate();

  //이미지 바꾸기
  const [main, setMain] = useState("outline");
  const [record, setRecord] = useState("outline");
  const [share, setShare] = useState("outline");
  const [alarm, setAlarm] = useState("outline");
  const [chat, setChat] = useState("outline");

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const className = e.currentTarget.className;
    switch (className) {
      case "nav-menu main":
        navigate("/main");
        setMain("fill");
        setRecord("outline");
        setShare("outline");
        setAlarm("outline");
        setChat("outline");
        break;
      case "nav-menu record":
        navigate("/record");
        setMain("outline");
        setRecord("fill");
        setShare("outline");
        setAlarm("outline");
        setChat("outline");
        break;
      case "nav-menu share":
        dispatch(RESET());
        navigate("/share");
        setMain("outline");
        setRecord("outline");
        setShare("fill");
        setAlarm("outline");
        setChat("outline");
        break;
      case "nav-menu alarm":
        navigate("/alarm");
        setMain("outline");
        setRecord("outline");
        setShare("outline");
        setAlarm("fill");
        setChat("outline");
        break;
      case "nav-menu chat":
        navigate("/chat");
        setMain("outline");
        setRecord("outline");
        setShare("outline");
        setAlarm("outline");
        setChat("fill");
        break;
      default:
        break;
    }
  };
  
  const handleLogOut = () => {
    navigate("/main");
    dispatch(LOG_OUT());
  }

  return (
    <div>
      <PC>
        <Head>
          <NavPC>
            <span className="nav-title">
              <img id="logo" src="../logo.png" alt="logo" />
              근의 공식
            </span>
            <Link to="/main" className="nav-menu">
              <li>메인</li>
            </Link>
            <Link to="/record" className="nav-menu">
              <li>운동기록</li>
            </Link>
            <Link to="/share" className="nav-menu" onClick={()=>dispatch(RESET())}>
              <li>공유하기</li>
            </Link>
            <Link to="/alarm" className="nav-menu">
              <li>알림</li>
            </Link>
            <Link to="/chat" className="nav-menu">
              <li>채팅</li>
            </Link>
            {isLogin ? (
              <span className="nav-user">
                <div className="profile-container">
                  <img src={user.image} alt="user_photo" />
                </div>
                <div className="nav-user-content">
                  <li onClick={() => navigate("/mypage")}>마이페이지</li>
                  <li onClick={() => navigate("/profile")}>프로필설정</li>
                  <li onClick={handleLogOut}>로그아웃</li>
                </div>
              </span>
            ) : (
              <Link to="/login" className="nav-user">
                <span className="nav-user-login">로그인</span>
              </Link>
            )}
          </NavPC>
        </Head>
      </PC>
      <Mobile>
        <Head>
          <UpNavMobile>
            <span className="nav-title">
              <img id="logo" src="../logo.png" alt="logo" />
              근의 공식
            </span>
            {isLogin ? (
              <span className="nav-user">
                <div className="profile-container">
                  <img src={user.image} alt="user_photo" />
                </div>
                <div className="nav-user-content">
                  <li onClick={() => navigate("/mypage")}>마이페이지</li>
                  <li onClick={() => navigate("/profile")}>프로필설정</li>
                  <li onClick={handleLogOut}>로그아웃</li>
                </div>
              </span>
            ) : (
              <Link to="/login" className="nav-user">
                <span className="nav-user-login">로그인</span>
              </Link>
            )}
          </UpNavMobile>
        </Head>
        <Foot>
          <DownNavMobile>
            <li className="nav-menu main" onClick={handleClick}>
              <img src={`../images/icon_main_${main}.png`} alt="main" />
            </li>
            <li className="nav-menu record" onClick={handleClick}>
              <img src={`../images/icon_record_${record}.png`} alt="record" />
            </li>
            <li className="nav-menu share" onClick={handleClick}>
              <img src={`../images/icon_share_${share}.png`} alt="share" />
            </li>
            <li className="nav-menu alarm" onClick={handleClick}>
              <img src={`../images/icon_alarm_${alarm}.png`} alt="alarm" />
            </li>
            <li className="nav-menu chat" onClick={handleClick}>
              <img src={`../images/icon_chat_${chat}.png`} alt="chat" />
            </li>
          </DownNavMobile>
        </Foot>
      </Mobile>
    </div>
  );
}
