const jwt = require("jsonwebtoken");
import { Users } from "../models/entity/User";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

export async function verifyToken(token: string) {
  const userInfo = jwt.verify(token, process.env.ACCESS_SECRET);
  return userInfo;

  // verifyRefreshToken(token: string) {
  //   const userInfo = jwt.verify(token, REFRESH_SECRET!)
  //   if (typeof userInfo === 'object') return userInfo
  //   else throw error('String err')
  // },
}
