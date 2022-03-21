import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";

dotenv.config();

const googleUrl = `https://accounts.google.com/o/oauth2/token`;
const googleInfo = `https://www.googleapis.com/oauth2/v3/userinfo`;
module.exports = async (req: Request, res: Response) => {
  //res.status(200).send("hello");
  //console.log(req.query); code
  axios
    .post(googleUrl, {
      client_id: process.env.GOOGLE_CLIENTID,
      client_secret: process.env.GOOGLE_CLIENTPASSWORD,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:4000/googleoauth",
    })
    .then(async (result) => {
      //console.log(result.data);
      let accessToken = result.data.access_token;
      let refreshToken = result.data.refresh_token;
      const resInfo = await axios
        .get(googleInfo, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((result) => result.data)
        .catch((err) => {
          console.log("유저정보를 가져올수 없습니다!", err.message);
        });
      // console.log(resInfo.email);
      const userInfo = await Users.findOne({
        email: `${resInfo.email}`,
      });
      if (!userInfo) {
        let makeUser: Users = new Users();
        makeUser.email = `${resInfo.email}`;
        makeUser.nickname = `${resInfo.email.split("@")[0]}`;
        makeUser.image = `${resInfo.picture}`;
        makeUser.password = `${resInfo.sub}`;
        try {
          makeUser.save();
          console.log("성공적으로 로그인이 되었습니다.");
        } catch (err) {
          console.log("유저생성 에러!");
        }
      }

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.status(200).json({
        accessToken,
        userInfo: {
          email: resInfo.email,
          nickname: resInfo.email.split("@")[0],
          image: resInfo.picture,
        },
      });
    })
    .catch((err) => {
      res.status(401).json({
        message: "로그인 실패하엿습니다!!",
      });
    });
};
