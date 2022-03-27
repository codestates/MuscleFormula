import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Post_Comments } from "../../models/entity/Post_Comment";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { postCommentId } = req.body;

  console.log("delete body", req.body);
  const postCommnet = await getRepository(Post_Comments).findOne({
    where: { id: postCommentId },
  });

  if (postCommnet) {
    try {
      await postCommnet.remove();
      res.status(200).json({ message: `코멘트 삭제 성공` });
    } catch (e) {
      console.log("코멘트 삭제 실패");
    }
  } else {
    res.status(404);
  }
};
