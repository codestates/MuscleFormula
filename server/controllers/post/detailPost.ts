import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const { postId } = req.body;
  console.log("makePost body : ", req.body);

  const detailPost = await getRepository(Posts).findOne({
    relations: ["post_comments", "post_likes", "users"],
    where: { id: postId },
  });

  if (detailPost) {
    console.log("postdetail", detailPost);
    res.status(200).json({
      id: detailPost.id,
      title: detailPost.title,
      image: detailPost.image,
      info: detailPost.info,
      total_Likes: detailPost.total_Likes,
      total_time: detailPost.total_time,
      created_At: detailPost.created_At,
      body_part: detailPost.body_Part,
      post_comments: detailPost.post_comments,
      post_likes: detailPost.post_likes,
    });
  } else {
    res.status(404);
  }
=======

  
>>>>>>> f68bfc51ac24bf805489ca95d7e0b1a71b43315d
};
