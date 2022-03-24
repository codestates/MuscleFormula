import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { Post_Comments } from "../../models/entity/Post_Comment";

dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  (today.getDate() + 1);
module.exports = async (req: Request, res: Response) => {
  // const { userId,
  //   postId,
  //   comment,
  // } = req.body;
  // console.log("makePost_Commets : ", req.body);

  // const user = await getRepository(Users).findOne({
  //   where: { id:userId },
  // });
  // const post = await getRepository(Posts).findOne({
  //   where: { id:postId },
  // });
  // const postCommnet = await getRepository(Post_Comments).findOne({
  //   where: { id:postCommentId },
  // });

  try {
    const allPost_Comment = await getRepository(Post_Comments).find({
      relations: ["users", "post"],
    });
    console.log("allPost_Comment:", allPost_Comment);
    res.status(200).json({ message: `코멘트 읽기 성공` });
  } catch (e) {
    console.log("comment 읽기 실패", e);
  }
};
