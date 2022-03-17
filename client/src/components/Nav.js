/**네비게이션바**/
import React from 'react';
import {useSelector} from 'react-redux';
import '../css/Nav.css';

export default function Nav() {
  const state = useSelector(state => state.userInfoReducer);
  return (
    <header>
      <div id='nav-container'>
        <img id='logo' src='../logo.png' alt='logo'/>
        <span className='nav-title'>근의 공식</span>
        <ul className='nav-menu'>
          <li>운동기록</li>
          <li>알림</li>
          <li>채팅</li>
        </ul>
        <span className='nav-user'>로그인</span>
      </div>
    </header>
  );
}