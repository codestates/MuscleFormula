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
module.exports = async (req: Request, res: Response) => {
  console.log(req.body);

  let accessToken = req.body.accessToken;
  const resInfo = await axios
    .get(googleInfo, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
    .then(async (result) => {
      console.log("result 유저정보", result.data);
      console.log("email : ", result.data.email);
      const email = result.data.email;
      const userInfo = await Users.findOne({
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
          makeUser.save();
          console.log("성공적으로 로그인이 되었습니다.");
        } catch (err) {
          console.log("유저생성 에러!");
        }
      }
      const findUser = await getRepository(Users).findOne({
        where: { email },
      });
      if (findUser) {
        userData = {
          id: findUser.id,
          email: findUser.email,
          nickname: findUser.nickname,
          image: findUser.image,
        };
      }

      const accessToken = await generateAccessToken(email, result.data.sub);
      const refreshToken = await generateRefreshToken(email, result.data.sub);
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
    })
    .catch((err) => {
      console.log("유저정보를 가져올수 없습니다!", err.message);
    });
};
