import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const qs = require("qs");

const serverURI = `http://localhost:4000`;
const kakao = {
  clientID: "7d8937ab746c6e3604651e33e259fc1d",
  clientSecret: "3pCkUe5V6jQXCFVEgJCXV7HxZNz0LOub",
  redirectUri: "http://localhost:3000/callbackKakao",
};

export const axios_Signup = (
  userEmail: string,
  userNickname: string,
  userPassword: string
) => {
  return axios.post(
    `${serverURI}/sign/up`,
    {
      email: userEmail,
      nickname: userNickname,
      password: userPassword,
    },
    {
      withCredentials: true,
    }
  );
};

export const axios_GetNickname = (userNickname: string) => {
  return axios.post(`${serverURI}/sign/nickname`, {
    nickname: userNickname,
  });
};

export const axios_GetKakaoToken = (code: string) => {
  return axios({
    method: "POST",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "authorization_code",
      client_id: kakao.clientID,
      client_secret: kakao.clientSecret,
      redirect_uri: kakao.redirectUri,
      code: code,
    }),
  });
};

export const axios_GetUser_TOKakaoToken = (
  kakao_access_token: string,
  kakao_refresh_token: string
) => {
  return axios.post(
    `http://localhost:4000/sign/kakaooauth`,
    { kakao_access_token, kakao_refresh_token },
    {
      withCredentials: true,
    }
  );
};
