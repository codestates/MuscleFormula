import "./css/App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Share from "./pages/Share";
import Records from "./pages/Records";
import Alarm from "./pages/Alarm";
import Chat from "./pages/Chat";
import Maypage from "./pages/Mypage";
import Profile from "./pages/Profile";
import Editor from "./pages/Editor";
import Test from "./test/Test";
import EditorTest from "./test/EditorTest";
import Landing from "./pages/Landing";
import CallbackKakao from "./callback/callbackKakao";
import CallbackGoogle from "./callback/callbackGoogle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { LOG_OUT } from "./reducer/userInfoReducer";

const App: React.FC = () => {
  const navigate = useNavigate();
  let dispatch: AppDispatch = useDispatch();

  let isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const localLogin = localStorage.getItem("isLogin");
  if (localLogin !== null) {
    isLogin = JSON.parse(localLogin);
  }
  useEffect(() => {
    console.log(" useEffect 시간타이머 작동");
    if (isLogin) {
      console.log(" if 시간타이머 작동");
      let oneDay = 1000 * 60 * 60 * 24;
      setTimeout(() => {
        console.log("10초 후에 로그아웃됨");
        navigate("/main");
        dispatch(LOG_OUT());
      }, oneDay);
    }
  }, [isLogin]);

  return (
    <div>
      <div className="app-nav-container">{/* <Nav /> */}</div>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Maypage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/record" element={<Records />} />
        <Route path="/share" element={<Share />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testEdit" element={<EditorTest />} />
        <Route path="/callbackKakao" element={<CallbackKakao />} />
        <Route path="/callbackGoogle" element={<CallbackGoogle />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
