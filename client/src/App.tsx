import './css/App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import Login from './pages/Login';
import LoginTest from './pages/LoginTest';
import Signup from './pages/Signup';
import SignupTest from './pages/SignupTest';
import ReducerTest from './test/ReducerTest';
import RecordShare from './pages/RecordShare';
import Record from './pages/Record';
import Alarm from './pages/Alarm';
import Chat from './pages/Chat';
import Maypage from './pages/Mypage';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
  <div>
    <Routes>
        <Route path="/main" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logintest" element={<LoginTest />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signuptest" element={<SignupTest />} />
        <Route path="/mypage" element={<Maypage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/record" element={<Record />} />
        <Route path="/share" element={<RecordShare />} />
        <Route path="/alarm" element={<Alarm/>}/>
        <Route path="/chat" element={<Chat/>} />
        <Route path="/test" element={<ReducerTest/>} />
      </Routes>
    {/* <Nav/>  */}
  </div>
  )
};

export default App;