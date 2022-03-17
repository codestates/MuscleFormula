/**네비게이션바**/
import React from 'react';
import {useSelector} from 'react-redux';

function Nav() {
  const state = useSelector(state => state.userInfoReducer);
  return (
    <div>
      <span id='title'>
        <img id= 'logo' src='../logo.png' alt='logo'/>
        <span id='name'>Muscle Formular</span>
      </span>
    </div>
  );
}
export default Nav;