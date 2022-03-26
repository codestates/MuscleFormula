import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const serverURI = `http://localhost:4000`;

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
  return axios.get(`${serverURI}/users/nickname`, {
    params: {
      nickname: userNickname,
    },
  });
};
