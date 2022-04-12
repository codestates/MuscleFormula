import "./css/App.css";
import { PC, Mobile } from "./mediaQuery";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Share from "./pages/Share";
import Records from "./pages/Records";
import Maypage from "./pages/Mypage";
import Profile from "./pages/Profile";
import Editor from "./pages/Editor";
import Landing from "./pages/Landing";
import { PrivacyPolicy } from "./components/Policy/PrivacyPolicy";
import CallbackKakao from "./callback/callbackKakao";
import CallbackGoogle from "./callback/callbackGoogle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import swal from "sweetalert";
import { LOG_OUT } from "./reducer/userInfoReducer";
import { TermsAndConditions } from "./components/Policy/TermsAndConditions";

const App: React.FC = () => {
  const navigate = useNavigate();
  let dispatch: AppDispatch = useDispatch();

  let isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const localLogin = localStorage.getItem("isLogin");
  if (localLogin !== null) {
    isLogin = JSON.parse(localLogin);
  }
  useEffect(() => {
    if (isLogin) {
      let oneDay = 1000 * 60 * 60 * 24;
      setTimeout(() => {
        navigate("/main");
        dispatch(LOG_OUT());
        return swal("유효시간이 지나 자동으로 로그아웃 되었습니다");
      }, oneDay);
    }
  }, [isLogin]);

  return (
    <div>
      <div className="app-nav-container">
        <Nav />
      </div>
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
        <Route path="/callbackKakao" element={<CallbackKakao />} />
        <Route path="/callbackGoogle" element={<CallbackGoogle />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
        <Route path="/" element={<Landing />} />
      </Routes>
      <PC>
        <footer className="pc-footer">
          <Footer />
        </footer>
      </PC>
      <Mobile>
        <footer className="m-footer">
          <Footer />
        </footer>
      </Mobile>
    </div>
  );
};

export default App;
