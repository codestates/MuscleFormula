import './css/App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ReducerTest from './test/ReducerTest';

const App: React.FC = () => {
  return (
  <div>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<ReducerTest/>} />
      </Routes>
    <Nav/>
  </div>
  )
};

export default App;