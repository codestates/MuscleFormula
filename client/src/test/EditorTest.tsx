import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLUS, MINUS, CHOICE } from "../reducer/counterReducer";
import { ADD, QUAN, OUT } from "../reducer/testReducer";
import { LOG_IN, LOG_OUT } from "../reducer/userInfoReducer";
import { useState } from "react";
import type { RootState, AppDispatch } from "../store";
import styled from "styled-components";
import StarPoint from "../components/StarPoint";

const Test = styled.div`
  margin: 6rem;
`;

function EditorTest() {
  return (
    <Test>
      <p>
        제목
        <input type="text"></input>
      </p>
      <p>사진넣기</p>
      <p>미리보기 사진</p>
      <p>공유된내용</p>
      <p>
        난이도
        <StarPoint />
      </p>
      <p>운동부위</p>
      <p>
        소감 <input type="text"></input>
      </p>
    </Test>
  );
}

export default EditorTest;
