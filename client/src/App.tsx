import "./css/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReducerTest from "./test/ReducerTest";
import Share from "./pages/Share";
import Record from "./pages/Record";
import Alarm from "./pages/Alarm";
import Chat from "./pages/Chat";
import Maypage from "./pages/Mypage";
import Profile from "./pages/Profile";
import Editor from "./pages/Editor";


const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Maypage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/record" element={<Record />} />
        <Route path="/share" element={<Share />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/test" element={<ReducerTest />} />
      </Routes>
      <Nav />
      <Footer/>
    </div>
  );
};

export default App;
