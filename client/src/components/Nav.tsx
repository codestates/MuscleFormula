//redux
import { useSelector } from 'react-redux';
import type { RootState } from '../store'
//style
import { Mobile, PC } from '../mediaQuery';
import styled from "styled-components";
//router
import { Link } from 'react-router-dom';

export const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  color: black;
`
export const Foot = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  color: black;
`

export const NavPC = styled.nav`
  height: 5rem;
  padding: 1rem;
  background : #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-style: solid;
  border-width: 2px;
  > .nav-title {
    flex: none;
    margin-right: 5rem;
    font-size: 2rem;
    font-family: 'IBM Plex Sans KR', sans-serif;
    > #logo {
      width: 50px;
      vertical-align: middle;
    }
  }
  > .nav-menu {
    list-style-type: none;
    text-decoration: none;
    &:focus, &:hover, &:visited, &link, &:active {
      text-decoration: none;
      color: black;
    }
    > li {
      display: inline;
      padding: 1rem;
      > img {
        width: 18px;
      }
    }
    > li:hover {
      color: #00cc99;
    }
  }
  > .nav-user {
    margin-left: auto;
    text-decoration: none;
    &:focus, &:hover, &:visited, &link, &:active {
      text-decoration: none;
      color: black;
    }
  }
`
export const UpNavMobile = styled.nav`
  height: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  border-bottom-style: solid;
  border-width: 2px;
  > .nav-title {
    flex: none;
    margin-right : auto;
    font-size: 1.5rem;
    font-family: 'IBM Plex Sans KR', sans-serif;
    > #logo {
      width: 50px;
      vertical-align: middle;
    }
  }
  > .nav-user {
    margin-left: auto;
    text-decoration: none;
    &:focus, &:hover, &:visited, &link, &:active {
    text-decoration: none;
    color: black;
    }
  }
`
export const DownNavMobile = styled.nav`
  height: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  border-bottom-style: solid;
  border-width: 2px;
  > .nav-menu {
    list-style-type: none;
    flex: none;
    padding: 0.5rem;
    img {
      width: 2rem;
    }
    .click-yes {
      display: none;
    }
    &:hover .click-no {
      display: none;
    }
    &:hover .click-yes {
      display: block;
    }
  }
`

export default function Nav () {
  const user = useSelector((state:RootState) => state.userInfo.userInfo);
  const isLogin = useSelector((state:RootState) => state.userInfo.isLogin);

  return (
    <div>
    <PC>
      <Head>
        <NavPC>
          <span className='nav-title'>
            <img id='logo' src='../logo.png' alt='logo'/>
            근의 공식
          </span>
            <Link to ='/' className= 'nav-menu'>
              <li>
                메인
              </li>
            </Link>
            <Link to ='/record' className= 'nav-menu'>
              <li>
                운동기록
              </li>
            </Link>
            <Link to ='/share' className= 'nav-menu'>
              <li>
                공유하기
              </li>
            </Link>
            <Link to ='/alarm' className='nav-menu'>
              <li>
                알림
              </li>
            </Link>
            <Link to='/chat' className='nav-menu'>
              <li>
                채팅
              </li>
            </Link>
  {isLogin? <span className='nav-user'>
              회원정보
            </span>
          : <Link to='/login' className='nav-user'>
                <span>
                  로그인
                </span>
            </Link>
  }
        </NavPC>
      </Head>
    </PC>
    <Mobile>
      <Head>
        <UpNavMobile>
          <span className='nav-title'>
            <img id='logo' src='../logo.png' alt='logo'/>
            근의 공식
          </span>
  {isLogin? <span className='nav-user'>
              회원정보
            </span>
          : <Link to='/login' className='nav-user'>
                <span>
                  로그인
                </span>
            </Link>
  }
        </UpNavMobile>
      </Head>
      <Foot>
        <DownNavMobile>
          <Link to='/' className='nav-menu'>
            <img className="click-no" src={require("../images/icon_main_outline.png")} alt="main"/>
            <img className="click-yes" src={require("../images/icon_main_fill.png")} alt="main"/>
          </Link>
          <Link to='/record' className='nav-menu'>
            <img className="click-no" src={require("../images/icon_record_outline.png")} alt="record"/>
            <img className="click-yes" src={require("../images/icon_record_fill.png")} alt="record"/>
          </Link>
          <Link to='/share' className='nav-menu'>
            <img className="click-no" src={require("../images/icon_share_outline.png")} alt="share"/>
            <img className="click-yes" src={require("../images/icon_share_fill.png")} alt="share"/>
          </Link>
          <Link to='/alarm' className='nav-menu'>
            <img className="click-no" src={require("../images/icon_alarm_outline.png")} alt="alarm"/>
            <img className="click-yes" src={require("../images/icon_alarm_fill.png")} alt="alarm"/>
          </Link>
          <Link to='/chat' className='nav-menu'>
            <img className="click-no" src={require("../images/icon_chat_outline.png")} alt="chat"/>
            <img className="click-yes" src={require("../images/icon_chat_fill.png")} alt="chat"/>
          </Link>
        </DownNavMobile>
      </Foot>
    </Mobile>
  </div>
  )
}