import { Request, Response } from "express";
import dotenv from "dotenv";
import { generateAccessToken } from "../../jwt/generateAccessToken";
import { generateRefreshToken } from "../../jwt/generateRefreshToken";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { id, email } = req.body;

  //   const userInfo = await Users.findOne({
  //     where: {
  //       email,
  //     },
  //   });
  const accessToken = await generateAccessToken(id, email);

  res.json({
    message: "login Success",
    data: { accessToken: accessToken },
  });
};
