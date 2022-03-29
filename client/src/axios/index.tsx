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

export const axios_GetUser_toKakaoToken = (
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

const googleUrl = `https://accounts.google.com/o/oauth2/token`;
const googleInfo = `https://www.googleapis.com/oauth2/v3/userinfo`;

export const axios_GetGoogleToken = (code: string) => {
  return axios.post(googleUrl, {
    client_id:
      "1062811618314-04ajm3grgt3c9hf51lq1911qt3el9ro9.apps.googleusercontent.com",
    client_secret: "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",
    code: code,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:3000/callbackGoogle",
  });
};
export const axios_GetUser_toGoogleTOken = (accessToken: string) => {
  return axios.post("http://localhost:4000/sign/googleoauth", {
    accessToken,
  });
};
