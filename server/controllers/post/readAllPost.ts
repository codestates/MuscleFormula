import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Posts } from "../../models/entity/Post";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("server readAllPost in !!");

  const allInfo = await getRepository(Posts).find({
    relations: ["users", "post_comments", "post_likes"],
    order: {
      id: "DESC",
    },
  });

  const createed = allInfo.map((item) => {
    const data = {
      postId: item.id,
      postTitle: item.title,
      info: item.info,
      postImage: item.image,
      user: {
        userId: item.users.id,
        nickname: item.users.nickname,
        image: item.users.image,
      },
      bodyPart: item.body_Part,
      difficult: item.difficult,
      totalTime: item.total_time,
      total_comments: item.post_comments.length,
      total_Likes: item.post_likes.length,
      created_At: item.created_At,
    };
    return data;
  });
  res.status(200).json({
    posts: createed,
  });
};
