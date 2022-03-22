import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Posts } from "../../models/entity/Post";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
      const allUsers = await getRepository(Posts).find();
      console.log("allUsers:", allUsers);

      res.status(200).json(allUsers)
};
