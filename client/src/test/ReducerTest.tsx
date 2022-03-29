import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLUS, MINUS, CHOICE } from "../reducer/counterReducer";
import { ADD, QUAN, OUT } from "../reducer/testReducer";
import { LOG_IN, LOG_OUT } from "../reducer/userInfoReducer";
import { useState } from "react";
import type { RootState, AppDispatch } from "../store";
import styled from "styled-components";
import StarPoint from "../components/StarPoint";
import BoxTest from "./BoxTest";

const Test = styled.div`
  margin: 6rem;
`;

function ReducerTest() {
  //redux안에 있는 모든 state들이 state입니다
  //let allstate = useSelector((state)=> state);
  //store에서 state 설정해야함
  const test = useSelector((state: RootState) => state.test.test);
  const count = useSelector((state: RootState) => state.counter.count);
  const user = useSelector((state: RootState) => state.userInfo.userInfo);
  const isLogin = useSelector((state: RootState) => state.userInfo.isLogin);

  let dispatch: AppDispatch = useDispatch();
  console.log("테스트용", test);
  console.log("카운터", count);
  console.log("유저정보", user);
  console.log("로그인", isLogin);

  const [number, setNumber] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return (
    <Test>
      <p>
        <button
          onClick={() => dispatch(ADD({ id: 2, name: "새상품", quan: 3 }))}
        >
          항목추가
        </button>
        <button onClick={() => dispatch(QUAN())}>수량증가</button>
        <button onClick={() => dispatch(OUT())}>항목빼기</button>
      </p>
      <p>
        <button
          onClick={() =>
            dispatch(
              LOG_IN({
                id: 1,
                nickname: "koko",
                image: "../images/photo_testuser.jpg",
              })
            )
          }
        >
          로그인
        </button>
        <button onClick={() => dispatch(LOG_OUT())}>로그아웃</button>
      </p>
      <p>
        <button onClick={() => dispatch(PLUS())}>PLUS</button>
        <button onClick={() => dispatch(MINUS())}>MINUS</button>
        <input
          type="text"
          placeholder="값을 입력해주세요"
          onChange={handleInputValue}
        />
        {number}
        <button onClick={() => dispatch(CHOICE(Number(number)))}>CHOICE</button>
      </p>
      <StarPoint />
      <BoxTest />
    </Test>
  );
}

export default ReducerTest;
