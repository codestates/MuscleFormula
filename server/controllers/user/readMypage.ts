import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token = auth.split(" ")[1];
    const verify = await verifyToken(token);
    console.log(verify);
    const allInfo = await getRepository(Users).findOne({
      relations: ["posts"],
      where: { email: verify.email },
    });
    console.log(allInfo);
    if (allInfo) {
    }
  }
};
