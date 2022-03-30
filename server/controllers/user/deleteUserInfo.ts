import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
const jwt = require("jsonwebtoken");
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const auth = req.headers["authorization"];
  console.log("user Info : ", userId);
  if (!auth) {
    res.status(401).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_SECRET, async (err, data) => {
      if (err) {
        res.status(401).send({
          message: "엑세스토큰이 만료 되엇습니다.",
        });
      } else if (data) {
        const user: any = await getRepository(Users).findOne({
          where: { userId },
        });
        console.log(user);
        if (user.email === data.email) {
          try {
            await user.remove();
            const allUsers = await getRepository(Users).find();
            console.log("allUsers:", allUsers);
            res.status(200).json({ message: `회원 삭제 성공` });
          } catch (e) {
            res.status(400).json({ message: ` 회원삭제를 실패 하엿습니다` });
          }
        } else {
          res.status(404).json({ message: `유저정보가 일치하지 않습니다` });
        }
      }
    });
  }
};
