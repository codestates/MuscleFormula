import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import type { AppDispatch } from "../store";

import { axios_GetGoogleToken, axios_GetUser_toGoogleTOken } from "../axios";

const qs = require("qs");

function CallbackGoogle() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const code: any = new URLSearchParams(window.location.search).get("code");
  console.log("받음 code :", code);
  useEffect(() => {
    if (code) {
      // console.log("useEffect if 문이 실행됨?");
      axios_GetGoogleToken(code).then((result) => {
        console.log(result.data);
        // let refreshToken = result.data.refresh_token;
        axios_GetUser_toGoogleTOken(result.data.access_token)
          .then((res) => {
            console.log("res.data", res.data);
            const { id, image, nickname } = res.data.user;
            const accessToken = res.data.accessToken;
            dispatch(
              LOG_IN({
                id,
                nickname,
                image,
                accessToken
              })
            );
            navigate("/main");
          })
          .catch((err) => {
            console.log("유저정보를 가져올수 없습니다!", err.message);
          });
      });
    }
  }, []);

  return <div></div>;
}

export default CallbackGoogle;
