import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("req.query: ", req.query);
  console.log("req.prams: ", req.params);
  console.log("req.body: ", req.body);
  const { nickname } = req.body;

  const findNick = await getRepository(Users).find({
    where: { nickname },
  });
  console.log("findNick:", findNick);
  if (findNick.length === 0) {
    res.status(200).json({ message: "사용가능한 닉네임 입니다." });
  } else {
    res.status(408).json({ message: "이미 존재하는 닉네임 입니다." });
  }
};
