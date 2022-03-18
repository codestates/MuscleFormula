/**네비게이션바**/
import React from 'react';
import {useSelector} from 'react-redux';
import { Mobile, PC } from '../mediaQuery';
import '../css/Nav.css';

export default function Nav() {
  const state = useSelector(state => state.userInfoReducer);
  return (
    <header>

      <PC>
      <div id='nav__container--PC'>
        <span className='nav__title--PC'>
        <img id='logo' src='../logo.png' alt='logo'/>
        근의 공식
        </span>
        <ul className='nav__menu--PC'>
          <li>운동기록</li>
          <li>알림</li>
          <li>채팅</li>
        </ul>
        <span className='nav__user--PC'>로그인</span>
      </div>
      </PC>

      <Mobile>
      <div id='nav__container--M'>
        <img id='icon__menu--M' src={require('../images/menu.png')} alt='menu'/>
        <span className='nav__title--M'>
        <img id='logo' src='../logo.png' alt='logo'/>
          근의 공식
        </span>
        <span className='nav__user--M'>로그인</span>
      </div>
      </Mobile>

    </header>
  );
}