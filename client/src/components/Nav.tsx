/**네비게이션바**/
import React from 'react';
import { Mobile, PC } from '../mediaQuery';
import styled from "styled-components";

export const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 18px;
`

export const NavPC = styled.nav`
  height: 5rem;
  padding: 1rem;
  background : #f2f2f2;
  display: flex;
  align-items: center;
  border-bottom-style: solid;
  border-width: 2px;
  > .nav-title {
    flex: none;
    font-size: 2rem;
    font-family: 'IBM Plex Sans KR', sans-serif;
    > #logo {
      width: 50px;
      vertical-align: middle;
    }
  }
  > .nav-menu {
    list-style-type: none;
    > li {
      display: inline;
      padding: 1rem;
    }
    > li:hover {
      color: #00cc99;
    }
  }
  > .nav-user {
    margin-left: auto;
  }
`
export const NavMobile = styled.nav`
  height: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  border-bottom-style: solid;
  border-width: 2px;
  > .nav-menu {
    flex: none;
    margin-right: auto;
    list-style-type: none;
    padding: 0;
    > #icon-menu {
      width: 30px;
    }
    > li {
      display: none;
      text-align: left;
    }
  }
  > .nav-title {
    flex: none;
    margin : 0;
    font-size: 2rem;
    font-family: 'IBM Plex Sans KR', sans-serif;
    > #logo {
      width: 50px;
      vertical-align: middle;
    }
  }
  > .nav-user {
    margin-left: auto;
  }
`

export default function Nav () {
  return (
    <Head>
    <PC>
      <NavPC>
        <span className='nav-title'>
          <img id='logo' src='../logo.png' alt='logo'/>
          근의 공식
        </span>
        <ul className='nav-menu'>
          <li>운동기록</li>
          <li>알림</li>
          <li>채팅</li>
        </ul>
        <span className='nav-user'>
          로그인
        </span>
      </NavPC>
    </PC>
    <Mobile>
    <NavMobile>
      <ul className='nav-menu'>
        <img id='icon-menu' src={require('../images/menu.png')} alt='menu'/>
        <li>운동기록</li>
        <li>알림</li>
        <li>채팅</li>
      </ul>
        <span className='nav-title'>
          <img id='logo' src='../logo.png' alt='logo'/>
          근의 공식
        </span>
      <span className='nav-user'>로그인</span>
      </NavMobile>
    </Mobile>
    </Head>
  )
}