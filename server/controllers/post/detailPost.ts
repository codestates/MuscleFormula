import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Posts } from "../../models/entity/Post";
import { Post_Comments } from "../../models/entity/Post_Comment";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("server detailePost in !!");
  const postId = req.params.id;
  console.log("params", postId);
  //console.log("makePost body : ", req.body);

  const detailPost = await getRepository(Posts).findOne({
    relations: ["post_comments", "post_likes", "users"],
    where: { id: postId },
  });
  const findComment: any = await getRepository(Post_Comments).find({
    relations: ["users"],
    where: { post: postId },
  });
  //console.log("detai;", findComment);

  const detailComment = findComment.map((item) => {
    const commentdata = {
      id: item.id,
      comment: item.comment,
      created_At: item.created_At,
      users: {
        id: item.users.id,
        email: item.users.email,
        nickname: item.users.nickname,
        image: item.users.image,
      },
    };
    return commentdata;
  });

  //console.log("detai;", findComment);
  if (detailPost) {
    console.log("postdetail", detailPost);
    res.status(200).json({
      id: detailPost.id,
      title: detailPost.title,
      image: detailPost.image,
      info: detailPost.info,
      difficult: detailPost.difficult,
      total_time: detailPost.total_time,
      created_At: detailPost.created_At,
      body_part: detailPost.body_Part,
      total_comment: detailComment,
      total_Likes: detailPost.post_likes,
      users: {
        id: detailPost.users?.id,
        email: detailPost.users?.email,
        nickname: detailPost.users?.nickname,
        image: detailPost.users?.image,
      },
    });
  } else {
    res.status(404);
  }
};
