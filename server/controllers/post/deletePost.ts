import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { postId } = req.body;

  console.log("delete body", req.body);
  const post = await getRepository(Posts).findOne({
    where: { id: postId },
  });

  if (post) {
    try {
      await post.remove();
      res.status(200).json({ message: `포스트 삭제 성공` });
    } catch (e) {
      console.log("포스트 삭제 실패");
    }
  } else {
    res.status(404);
  }
};
