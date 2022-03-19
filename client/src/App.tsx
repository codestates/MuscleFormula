import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
  <div>
    <Nav/>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    <Footer/>
  </div>
  )
};

export default App;