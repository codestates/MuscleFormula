import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ReducerTest() {

  //redux안에 있는 모든 state들이 state입니다
  //let allstate = useSelector((state)=> state);
  //
  let test = useSelector((state:any) => state.testReducer.test);
  let userInfo = useSelector((state:any) => state.userInfoReducer.userInfo); 

  let dispatch = useDispatch();
  console.log('테스트용',test);
  console.log('유저정보',userInfo);

  return (
    <div>
      <p>
        <button onClick={()=> dispatch({type: 'ADD', payload: {id:2, name:'새상품', quan: 3}})}>항목추가</button>
        <button onClick={()=> dispatch({type: 'OUT'})}>항목빼기</button>
        <button onClick={()=> dispatch({type: 'QUANTITY_UP'})}>수량증가</button>
      </p>
      <p>
        <button onClick={()=> dispatch({type: 'LOG_IN', payload: {id:1, nickname:'merong', img: './logo192.png'}})}>로그인</button>
        <button onClick={()=> dispatch({type: 'LOG_OUT'})}>로그아웃</button>
      </p>
    </div>
  );
}

export default ReducerTest;