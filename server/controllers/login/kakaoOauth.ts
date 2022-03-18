import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";

dotenv.config();

const kakaoUrl = `https://accounts.kakao.com/o/oauth2/token`;
const kakaoInfoUrl = `https://www.kakaoapis.com/oauth2/v3/userinfo`;
module.exports = (req: Request, res: Response) => {
  res.status(200).send("hello");
  //console.log(req.query); code
  axios
    .post(kakaoUrl, {
      client_id: process.env.KAKAO_CLIENTID,
      client_secret: process.env.KAKAO_CLIENTPASSWORD,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:4000/kakaooauth",
    })
    .then(async (res) => {
      console.log(res.data);
      let accessToken = res.data.access_token;
      let refreshToken = res.data.refresh_token;
      const resInfo = await axios
        .get(kakaoInfoUrl, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((result) => console.log(result.data))
        .catch((err) => {
          console.log("kakao oauth err :", err.message);
        });
    });
};
