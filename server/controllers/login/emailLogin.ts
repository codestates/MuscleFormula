import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { generateAccessToken } from "../../jwt/generateAccessToken";
import { generateRefreshToken } from "../../jwt/generateRefreshToken";
import { Users } from "../../models/entity/User";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log("login req : ", req.body);

  const findUser = await getRepository(Users).findOne({
    where: { email, password },
  });

  if (!findUser) {
    res.status(404).json({ message: "Can't find User" });
  } else {
    const userData = {
      id: findUser.id,
      email: findUser.email,
      nickname: findUser.nickname,
      image: findUser.image,
    };

    const accessToken = await generateAccessToken(email, password);
    const refreshToken = await generateRefreshToken(email, password);
    res.cookie("refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 180, // 6개월
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
};
