import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { userId, postTitle, postImage, info, exerciseInfo, totalTime, difficult, bodyPart } = req.body;
  console.log("makePost body : ", req.body);

  


};
