import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const auth = req.headers["authorization"];
  console.log("user Info : ", userId);
  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);
    const user: any = await getRepository(Users).findOne({
      where: { userId },
    });
    console.log(user);
    if (user.email === verify.email) {
      try {
        await user.remove();
        const allUsers = await getRepository(Users).find();
        console.log("allUsers:", allUsers);
        res.status(200).json({ message: `회원 삭제 성공` });
      } catch (e) {
        console.log("회원정보 삭제 실패", e);
      }
    } else {
      res.status(404).json({ message: `유저정보가 일치하지 않습니다` });
    }
  }
};
