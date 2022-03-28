// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import { axios_Signup, axios_GetNickname } from "../axios";

export const Main = styled.div`
  border: 3px solid green;
  padding: 10px;
  /* 화면 중앙으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > #editor-container {
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

export default function Callbak() {
  const navigate = useNavigate();
  const code: any = new URLSearchParams(window.location.search).get("code");
  console.log("받음 code :", code);

  // useEffect(() => {
  //   if (code) {
  //     console.log("useEffect 정상작동?");
  //   }

  // console.log("getcode:", getcode);

  // if (getcode) {
  //   axios({
  //     method: "POST",
  //     url: "https://kauth.kakao.com/oauth/token",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //     },
  //     data: qs.stringify({
  //       grant_type: "authorization_code",
  //       client_id: kakao.clientID,
  //       client_secret: kakao.clientSecret,
  //       redirect_uri: kakao.redirectUri,
  //       code: getcode,
  //     }),
  //   }).then((res) => {
  //     const kakao_access_token = res.data.access_token;
  //     const kakao_refresh_token = res.data.refresh_token;
  //     axios
  //       .post(
  //         `http://localhost:4000/sign/kakaooauth`,
  //         { kakao_access_token, kakao_refresh_token },
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       .then((res) => {
  //         console.log("kakao res:", res);
  //         const { id, image, nickname } = res.data.user;
  //         dispatch(
  //           LOG_IN({
  //             id,
  //             nickname,
  //             image,
  //           })
  //         );
  //         navigate("/main");
  //       });
  //   });
  // }
  // }, []);
  return (
    <div id="EditorPage">
      <Main>
        <div id="editor-container">
          <div>글쓰기</div>
          <div></div>
        </div>
      </Main>
    </div>
  );
}
