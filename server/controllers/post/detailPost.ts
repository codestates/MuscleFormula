import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Posts } from "../../models/entity/Post";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const params = req.params;
  console.log("params", params);
  //console.log("makePost body : ", req.body);

  const detailPost = await getRepository(Posts).findOne({
    relations: ["post_comments", "post_likes", "users"],
    where: { id: params.id },
  });

  if (detailPost) {
    console.log("postdetail", detailPost);
    res.status(200).json(
      detailPost
      // id: detailPost.id,
      // title: detailPost.title,
      // image: detailPost.image,
      // info: detailPost.info,
      // total_Likes: detailPost.total_Likes,
      // total_time: detailPost.total_time,
      // created_At: detailPost.created_At,
      // body_part: detailPost.body_Part,
      // post_comments: detailPost.post_comments,
      // post_likes: detailPost.post_likes,
    );
  } else {
    res.status(404);
  }
};
