import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import type { AppDispatch } from "../store";
import swal from "sweetalert";
import { axios_GetGoogleToken, axios_GetUser_toGoogleTOken } from "../axios";

const qs = require("qs");

function CallbackGoogle() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const code: any = new URLSearchParams(window.location.search).get("code");
  useEffect(() => {
    if (code) {
      axios_GetGoogleToken(code).then((result) => {
        // let refreshToken = result.data.refresh_token;
        axios_GetUser_toGoogleTOken(result.data.access_token)
          .then((res) => {
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
          })
          .catch((err) => {
            swal("유저정보를 가져올수 없습니다!");
          });
      });
    }
  }, []);

  return <div></div>;
}

export default CallbackGoogle;
