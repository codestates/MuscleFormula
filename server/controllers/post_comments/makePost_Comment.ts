import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { Post_Comments } from "../../models/entity/Post_Comment";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
module.exports = async (req: Request, res: Response) => {
  const { userId, postId, comment } = req.body;
  console.log("makePost_Commets : ", req.body);
  const auth = req.headers["authorization"];

  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);
    const user: any = await getRepository(Users).findOne({
      where: { id: userId },
    });
    //console.log(user);
    const post = await getRepository(Posts).findOne({
      where: { id: postId },
    });
    // console.log(verify.email);
    if (user.email === verify.email) {
      // const post = new Posts();
      // (post.title = postTitle),
      // (post.info = info),
      // (post.total_time = totalTime),
      // (post.body_Part = bodyPart),
      // (post.difficult = difficult),
      // (post.image = postImage),
      // (post.created_At = created_At),
      // (post.users = user),
      // (post.post_comments = []),
      // (post.post_likes = []);

      const created = Post_Comments.create({
        comment: comment,
        created_At: todaySring,
        users: user,
        post: post,
      });

      try {
        await created.save();
        // await post.save();
        const allPost_Comment = await getRepository(Post_Comments).find({
          relations: ["users", "post"],
        });
        console.log("allPost_Comment:", allPost_Comment);
        res.status(200).json({ message: `코멘트 생성 성공`, data: created });
      } catch (e) {
        console.log("comment 생성 실패", e);
      }
    } else {
      res
        .status(404)
        .json({ message: `해당 유저가 존재하지 않습니다(id가잘못됨)` });
    }
  }
};
