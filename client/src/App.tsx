import "./css/App.css";
import React from "react";
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
import ReducerTest from "./test/ReducerTest";
import EditorTest from "./test/EditorTest";
import Landing from "./pages/Landing";
import CallbackKakao from "./callback/callbackKakao";
import CallbackGoogle from "./callback/callbackGoogle";

const App: React.FC = () => {
  return (
    <div>
      <div className="app-nav-container">{/* <Nav /> */}</div>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Maypage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/record" element={<Records />} />
        <Route path="/share" element={<Share />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/test" element={<ReducerTest />} />
        <Route path="/testEdit" element={<EditorTest />} />
        <Route path="/callbackKakao" element={<CallbackKakao />} />
        <Route path="/callbackGoogle" element={<CallbackGoogle />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
