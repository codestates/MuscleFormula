import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { generateAccessToken } from "../../jwt/generateAccessToken";
import { generateRefreshToken } from "../../jwt/generateRefreshToken";
import { getRepository } from "typeorm";

dotenv.config();

const googleUrl = `https://accounts.google.com/o/oauth2/token`;
const googleInfo = `https://www.googleapis.com/oauth2/v3/userinfo`;
let userData: any;
let email: string;
let password: string;
module.exports = async (req: Request, res: Response) => {
  console.log("server googleOauth in !!");

  let google_access_token = req.body.accessToken;
  const result = await axios.get(googleInfo, {
    headers: {
      authorization: `Bearer ${google_access_token}`,
    },
  });
  console.log("result 유저정보", result.data);
  console.log("email : ", result.data.email);
  email = result.data.email;
  password = result.data.sub;
  const userInfo = await getRepository(Users).findOne({
    email,
  });
  console.log("userInfo:", userInfo);
  if (!userInfo) {
    let makeUser: Users = new Users();
    makeUser.email = email;
    makeUser.nickname = email.split("@")[0];
    makeUser.image = result.data.picture;
    makeUser.password = result.data.sub;
    try {
      await makeUser.save();
      const allUsers = await getRepository(Users).find();
      console.log("allUsers:", allUsers);
      console.log("성공적으로 로그인이 되었습니다.");
    } catch (err) {
      console.log("유저생성 에러!");
    }
  }

  console.log("email", email);
  const findUser = await getRepository(Users).findOne({
    where: { email },
  });
  console.log("findUser", findUser);

  if (findUser) {
    userData = {
      id: findUser.id,
      email: findUser.email,
      nickname: findUser.nickname,
      image: findUser.image,
    };
  }

  const accessToken = await generateAccessToken(userData.id, email, password);
  const refreshToken = await generateRefreshToken(userData.id, email, password);
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
};
