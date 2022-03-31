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
  margin-top: 5rem;
  /* 화면 중앙으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  flex-direction: column;
  > div {
    display: flex;
    width: 100%;
  }
  > #detial-container-up {
    display: flex;
    flex: 2 0 auto;
    flex-direction: column;
    > #detial-container-up-up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  > #detial-container-down {
    flex: 1 0 auto;
  }
  > #detial-container-comment {
    flex: 2 0 auto;
  }
`;

export default function Detail() {
  const navigate = useNavigate();

  return (
    <div id="DetailPage">
      <Main>
        <div id="detial-container-up">
          <div id="detail-title">제목입니당</div>
          <div id="detial-container-up-up">
            <div id="detail-userinfo">
              <div>사진</div>
              <div>닉네임(김코딩)</div>
            </div>
            <div id="detail-butten">수정, 삭제</div>
          </div>

          <div id="detail-image">
            <div>이미지</div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAASFBMVEX29vb5+fnb29v19fWTk5PW1taenp6lpaXIyMjk5OSamprT09Pw8PDe3t7m5ubs7OzBwcG9vb2wsLCkpKSysrLHx8eKioq3t7fjW85lAAACfUlEQVR4nO3W3VLkIBCG4fATCCFAIJnN/d/pNpPR1VVPVresiu9zMKYAD/gKmh4GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi/jDHn33cmzJvBH0Hd7K+gBqVtVK8ndmutT+qD/7syNc2u9UzmUbav1HMGKkW763L/VE8/L1a8/bgMyWSyQZ2ZLEHr/HRf1GDXPrRknZZBfiSfvuBcUZJOOZhzKHznDr6emmzx7Twny7T5zcenUIxkorSvh5+rbt6ti9JNVrRxGPKx+dZ8UWXd9+bjpY6KZLJoq++ZTO4WUnX6scF7JqPzMVS7x7DKRB5T0K2Vcshoai6bW9Ml7/OlinE/J8q3nsnS2qJUcfVVJnMcVLBTv11RSocpqW5JOxlVN1ey74PJjlc6KPdM9KzTPIZt6vXhaMs59chEK8lEdi45yO3affM+RdffqtWVNPtjP5pk9r3b+FL3TIzf5ZykrZeSpbZyTr2Tyc2tOd+2MP3JpMbuUlW2ZzIM2h1uzP7WM9k/PieLPxY1xC3FWRqXfneSBHW53u7MZGnWjab5Xk/mRz25v8WvMym+SjMy9XpSjZyuXk/qcq8y37yNL3VmMiTJpL8xOjqfz4m4Wj+VF5lIjT3spA/pbofVOm/dlodofdSrvdbdiVvPRCqr7H30zu3hcUzq5n0Lurf3eRvlcfGjyrtzdWpBGV1rkLujTGxOxpbv3cUXe9mzy+7Lc6eunjwW9a9zgXwscmOG5vuwKdlc6dX5V2qqo9yYa7Wvn6SidCltutZz81kmh1A4JX8jEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/3G+tqRcEUE6XTwAAAABJRU5ErkJggg=="></img>
          </div>
        </div>
        <div id="detial-container-down">
          <div id="detail-exInfo">
            팔굽 윈몸 난이도
            <div>운동종류</div>
            <div>운동정보</div>
            <div>운동소감</div>
          </div>
        </div>
        <div id="detial-container-comment">
          <ul>
            <li>댓글 1</li>
            <li>댓글 2</li>
            <li>댓글 3</li>
          </ul>
        </div>
      </Main>
    </div>
  );
}
