import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log("user Info : ", email)

  const user = await getRepository(Users).findOne({
    where: { email },
  });
  if (user) {
    try {
      await user.remove();
      const allUsers = await getRepository(Users).find();
      console.log("allUsers:", allUsers)
      res.status(200).json({ message: `회원 삭제 성공` });
    } catch (e) {
      console.log("회원정보 삭제 실패");
    }
  } else {
    res.status(404).json({ message: `이미 존재하는 이메일 입니다` });
  }
};
