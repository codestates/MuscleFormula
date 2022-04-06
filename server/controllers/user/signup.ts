import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("server signup in !!");

  const { email, password, nickname, image } = req.body;
  console.log("signup Info : ", email, password, nickname, image);

  const user = await getRepository(Users).findOne({
    where: { email },
  });
  const duplicateNickname = await getRepository(Users).findOne({
    where: { nickname: nickname },
  });
  console.log(duplicateNickname);
  if (duplicateNickname) {
    res.status(409).send({ message: "이미 존재하는 닉네임 입니다." });
  } else {
    if (!user) {
      const signup = new Users();
      signup.email = req.body.email;
      signup.password = req.body.password;
      signup.nickname = req.body.nickname;
      // signup.image = req.body.image;

      try {
        await signup.save();
        const allUsers = await getRepository(Users).find();
        // console.log("allUsers:", allUsers);
        res.status(200).json({ message: `회원가입 성공` });
      } catch (e) {
        console.log("회원가입실패");
      }
    } else {
      res.status(404).json({ message: `이미 존재하는 이메일 입니다` });
    }
  }
};
