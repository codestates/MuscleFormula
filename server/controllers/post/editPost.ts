import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { email, password, nickname, image } = req.body;



};
