import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("req.query: ", req.query);
  const { nickname } = req.query;

  const findNick = await getRepository(Users).find({
    where: { nickname },
  });

  console.log("findNick:", findNick);
  res.status(200).json(findNick);
};
