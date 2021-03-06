import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import type { AppDispatch } from "../store";

import { axios_GetKakaoToken, axios_GetUser_toKakaoToken } from "../axios";

const qs = require("qs");

function CallbackKakao() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const code: any = new URLSearchParams(window.location.search).get("code");
  useEffect(() => {
    if (code) {
      axios_GetKakaoToken(code).then((res) => {
        axios_GetUser_toKakaoToken(
          res.data.access_token,
          res.data.refresh_token
        ).then((res) => {
          const { id, image, nickname, loginType } = res.data.user;
          const accessToken = res.data.accessToken;
          dispatch(
            LOG_IN({
              id,
              nickname,
              image,
              accessToken,
              loginType
            })
          );
          navigate("/main");
        });
      });
    }
  }, []);

  return <div></div>;
}

export default CallbackKakao;
