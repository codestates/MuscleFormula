/**포스트 상세 페이지**/
// export default function Detail() {
//   console.log("알림 페이지");

//   return (
//     <div id="main-container">
//       <div></div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { axios_Signup, axios_GetNickname } from "../axios";

export const Main = styled.div`
  border: 3px solid green;
  padding: 10px;
  /* 화면 중앙으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > #detial-container {
    border: 3px solid green;
    padding: 10px;
    height: 60vh;
    width: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
  }
`;

export default function Detail() {
  const navigate = useNavigate();

  return (
    <div id="DetailPage">
      <Main>
        <div id="detial-container">
          <h1>상세페이지</h1>
        </div>
      </Main>
    </div>
  );
}
