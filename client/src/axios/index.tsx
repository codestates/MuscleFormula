import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
const qs = require("qs");
const clientURI = `http://localhost:3000`;
const serverURI = `http://localhost:4000`;
// const serverURI = `https://server.muscleformula.xyz`;

// let user = useSelector((state: RootState) => state.userInfo.userInfo);
// const localUser = localStorage.getItem("userInfo");
// if (localUser !== null) {
//   user = JSON.parse(localUser);
// }
// const accessToken = user.accessToken;

//----------------------------------------------------------------
// ! oauth
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
  return axios.post(`${serverURI}/sign/up`, {
    email: userEmail,
    nickname: userNickname,
    password: userPassword,
  });
};

export const axios_Login = (userEmail: string, userPassword: string) => {
  return axios.post(
    `${serverURI}/sign/in`,
    {
      email: userEmail,
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
    `${serverURI}/sign/kakaooauth`,
    { kakao_access_token, kakao_refresh_token }
    // {
    //   withCredentials: true,
    // }
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
    redirect_uri: `${clientURI}/callbackGoogle`,
  });
};
export const axios_GetUser_toGoogleTOken = (accessToken: string) => {
  return axios.post(`${serverURI}/sign/googleoauth`, {
    accessToken,
  });
};
//----------------------------------------------------------------
// ! User

export const axios_Put_User = (formData: any, accessToken: string) => {
  return axios.put(`${serverURI}/user`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${accessToken}`,
    },
  });
};

export const axios_Delete_User = (accessToken: string) => {
  return axios.delete(`${serverURI}/user`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

//----------------------------------------------------------------
// ! UserRecord
export const axios_Delete_UserRecord = (
  genre: string,
  accessToken: string,
  date: string
) => {
  return axios
    .delete(`${serverURI}/record/?date=${date}`, {
      data: { genre: genre },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
    .then(async () => {
      let middle = await axios.get(`${serverURI}/record?date=${date}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });

      return middle;
    });
};

export const axios_Get_UserRecord = (
  submitDay: string,
  accessToken: string
) => {
  return axios.get(`${serverURI}/record?date=${submitDay}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

export const axios_Post_UserRecord = (records: any, accessToken: string) => {
  return axios.post(
    `${serverURI}/record`,
    {
      record: records,
    },
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const axios_Get_UserRecord_Date = (
  date: string,
  accessToken: string
) => {
  return axios.get(`${serverURI}/record?date=${date}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

//----------------------------------------------------------------
// ! post

export const axios_Get_Posts = () => {
  return axios.get(`${serverURI}/posts`);
};

export const axios_CreatePost = (formData: any, accessToken: string) => {
  return axios.post(`${serverURI}/posts`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${accessToken}`,
    },
    // withCredentials: true,
  });
};
export const axios_Put_Post = (
  formData: any,
  postId: string | number,
  accessToken: string
) => {
  return axios.put(`${serverURI}/posts/${postId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${accessToken}`,
    },
    // withCredentials: true,
  });
};

export const axios_GetMyPosts = (accessToken: string) => {
  return axios.get(`${serverURI}/user`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

export const axios_Get_DetailPosts = (postId: number | string | undefined) => {
  return axios.get(`${serverURI}/posts/${postId}`);
};

export const axios_Delete_Post = (
  postId: number | string | undefined,
  accessToken: string
) => {
  return axios.delete(`${serverURI}/posts/${postId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

//----------------------------------------------------------------
// ! Commnet

export const axios_Create_Comment = (
  postId: string | undefined,
  comment: string | null,
  accessToken: string
) => {
  return axios.post(
    `${serverURI}/comment/${postId}`,
    { comment },
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      // withCredentials: true,
    }
  );
};

export const axios_Put_comment = (
  commentId: number,
  comment: string,
  accessToken: string
) => {
  return axios.put(
    `${serverURI}/comment/${commentId}`,
    {
      comment: comment,
    },
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const axios_Delete_comment = (
  commentId: number,
  accessToken: string
) => {
  return axios.delete(`${serverURI}/comment/${commentId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

//----------------------------------------------------------------
// ! Like

export const axios_Get_Like = (accessToken: string) => {
  return axios.get(`${serverURI}/like`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};

export const axios_Create_Like = (
  postId: string | undefined,
  accessToken: string
) => {
  return axios.post(
    `${serverURI}/like/${postId}`,
    {},
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const axios_Delete_Like = (
  postId: string | undefined,
  accessToken: string
) => {
  return axios.delete(`${serverURI}/like/${postId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
};
