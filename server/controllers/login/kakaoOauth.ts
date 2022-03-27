import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
const qs = require("qs");

dotenv.config();
// https://kauth.kakao.com
const kakaoCodeGetURI = `https://kauth.kakao.com/oauth/authorize?client_id=7d8937ab746c6e3604651e33e259fc1d&redirect_uri=http://localhost:4000/kakaooauth&response_type=code`;
const kakao = {
  clientID: "7d8937ab746c6e3604651e33e259fc1d",
  clientSecret: "3pCkUe5V6jQXCFVEgJCXV7HxZNz0LOub",
  redirectUri: "http://localhost:4000/kakaooauth",
};

// const getTokenUrl = `https://kauth.kakao.com/oauth/token`;
// const kakaoInfoUrl = `https://www.kakaoapis.com/oauth2/v3/userinfo`;

module.exports = async (req: Request, res: Response) => {
  console.log("Client 코드 : ", req.query.code);

  const tokenResponse = await axios({
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
      code: req.query.code,
    }),
  });

  console.log("tokenData: ", tokenResponse.data);
  const kakao_access_token = tokenResponse.data.access_token;
  const kakao_refresh_token = tokenResponse.data.refresh_token;

  const userResponse = await axios({
    method: "GET",
    url: "https://kapi.kakao.com/v2/user/me",
    headers: {
      Authorization: `Bearer ${kakao_access_token}`,
    },
  });

  console.log("userResponse :", userResponse.data);

  res.status(200).json(userResponse.data);
  // res.status(200).send("hello");
};
