import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { getRepository } from "typeorm";
import { generateAccessToken } from "../../jwt/generateAccessToken";
import { generateRefreshToken } from "../../jwt/generateRefreshToken";
const qs = require("qs");

dotenv.config();
// https://kauth.kakao.com
const kakao = {
  clientID: "7d8937ab746c6e3604651e33e259fc1d",
  clientSecret: "3pCkUe5V6jQXCFVEgJCXV7HxZNz0LOub",
  redirectUri: "http://localhost:4000/kakaooauth",
};

// const getTokenUrl = `https://kauth.kakao.com/oauth/token`;
// const kakaoInfoUrl = `https://www.kakaoapis.com/oauth2/v3/userinfo`;

module.exports = async (req: Request, res: Response) => {
  console.log("Client 코드 : ", req.body);

  const { kakao_access_token, kakao_refresh_token } = req.body;

  const userResponse = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakao_access_token}`,
    },
  });

  console.log("userResponse :", userResponse.data);
  console.log("userEmail :", userResponse.data.kakao_account.email);
  console.log(
    "usernickname :",
    userResponse.data.kakao_account.profile.nickname
  );
  console.log(
    "userimg :",
    userResponse.data.kakao_account.profile.profile_image_url
  );
  console.log("userpassword :", userResponse.data.id);
  const email = userResponse.data.kakao_account.email;
  const password = userResponse.data.id;
  const user: any = await getRepository(Users).findOne({
    where: { email },
  });

  if (!user) {
    // 회원가입
    const signup = new Users();
    signup.email = email;
    signup.password = userResponse.data.id;
    signup.nickname = userResponse.data.kakao_account.profile.nickname;
    console.log("signup", signup);
    try {
      await signup.save();
      const allUsers = await getRepository(Users).find();
      console.log("allUsers:", allUsers);
    } catch (e) {
      console.log("kakao 회원가입실패", e);
    }
  } else {
    // 있으면 유저 정보를 리턴해줌 (로그인시킴)
  }
  const findUser = await getRepository(Users).findOne({
    where: { email },
  });

  if (findUser) {
    const userData = {
      id: findUser.id,
      email: findUser.email,
      nickname: findUser.nickname,
      image: findUser.image,
    };

    const accessToken = await generateAccessToken(userData.id, email, password);
    const refreshToken = await generateRefreshToken(
      userData.id,
      email,
      password
    );
    res.cookie("refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 7, // 1주일
      //domain: "gg-one-delta.vercel.app",
      //path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    console.log(req.cookies.refreshToken);
    res.json({
      message: "login Success",
      accessToken: accessToken,
      user: userData,
    });
  }
};
