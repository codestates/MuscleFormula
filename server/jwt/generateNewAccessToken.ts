const jwt = require("jsonwebtoken");
import { Request, Response } from "express";
import { Users } from "../models/entity/User";
import { generateAccessToken } from "./generateAccessToken";
import { generateRefreshToken } from "./generateRefreshToken";
import dotenv from "dotenv";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  //console.log(refreshToken);
  jwt.verify(refreshToken, process.env.REFRESH_SECRET, async (err, data) => {
    if (err) {
      res.send({
        data: null,
        message: "invalid refresh token, please log in again",
      });
    } else if (data) {
      const userData: any = await Users.findOne({
        where: { email: data.email },
      });
      console.log("userData in generate", userData);
      if (data.email === userData?.email) {
        const accessToken = await generateAccessToken(
          userData.id,
          userData.email,
          userData.password
        );
        const refreshToken = await generateRefreshToken(
          userData.id,
          userData.email,
          userData.password
        );
        res.cookie("refreshToken", refreshToken, {
          maxAge: 60 * 60 * 24 * 7, // 1주일
          //domain: "/",
          //path: "/",
          httpOnly: true,
          // secure: true,
          sameSite: "none",
        });

        //console.log(req.cookies.refreshToken);
        res.json({
          message: "login Success",
          accessToken: accessToken,
          user: userData,
        });
      }
    }
  });
};
