import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './css/App.css'
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
