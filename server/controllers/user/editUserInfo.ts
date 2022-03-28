import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { email, password, nickname, image } = req.body;
  //console.log("signup Info : ", email, password, nickname, image);
  const auth = req.headers["authorization"];

  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);
    const user: any = await getRepository(Users).findOne({
      where: { email },
    });
    if (user.email === verify.email) {
      user.email = email;
      user.password = password;
      user.nickname = nickname;
      user.image = image;

      try {
        await user.save();
        const allUsers = await getRepository(Users).find();
        console.log("allUsers:", allUsers);
        res.status(200).json({ message: `수정 성공` });
      } catch (e) {
        console.log("회원정보 수정 실패");
      }
    } else {
      res.status(404).json({ message: `유저정보가 일치하지 않습니다` });
    }
  }
};
