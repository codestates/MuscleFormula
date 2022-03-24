import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { Post_Likes } from "../../models/entity/Post_Like";

dotenv.config();
module.exports = async (req: Request, res: Response) => {
  const { userId, postId } = req.body;
  console.log("makePost_Likes: ", req.body);

  const user = await getRepository(Users).findOne({
    where: { id: userId },
  });
  const post = await getRepository(Posts).findOne({
    where: { id: postId },
  });

  const postLike = await getRepository(Post_Likes).findOne({
    where: { post: post, users: user },
  });

  console.log("postLike:", postLike);
  console.log("user:", user);
  console.log("post:", post);
  if (postLike) {
    try {
      await postLike.remove();
      res.status(200).json({ message: `like 삭제 성공` });
    } catch (e) {
      console.log("like 삭제 실패", e);
    }
  } else {
    console.log("like가 존재하지 않음 (id확인)");
  }
};
