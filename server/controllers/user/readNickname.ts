import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { nickname } = req.params;
  console.log(req.params);

  const duplicateNickname = await getRepository(Users).findOne({
    where: { nickname: nickname },
  });
  console.log(duplicateNickname);
  if (duplicateNickname) {
    res.status(409).send({ message: "이미 존재하는 닉네임 입니다." });
  } else {
    res.status(200).send({ message: "사용 가능한 닉네임 입니다." });
  }
};
