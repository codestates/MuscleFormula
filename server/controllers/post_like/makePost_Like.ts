import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { Post_Likes } from "../../models/entity/Post_Like";
const jwt = require("jsonwebtoken");
dotenv.config();
module.exports = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const auth = req.headers["authorization"];

  if (!auth) {
    res.status(401).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_SECRET, async (err, data) => {
      if (err) {
        res.status(401).send({
          message: "엑세스토큰이 만료 되엇습니다.",
        });
      } else if (data) {
        const user: any = await getRepository(Users).findOne({
          where: { id: data.id },
        });
        const post: any = await getRepository(Posts).findOne({
          relations: ["post_likes"],
          where: { id: postId },
        });
        const postlike: any = await getRepository(Post_Likes).findOne({
          where: { users: data.id, post: postId },
        });
        console.log(postlike);
        if (postlike) {
          res.status(409).json({ message: "이미 좋아요를 하셧습니다." });
        } else if (user.email === data.email && post) {
          const postLike = Post_Likes.create({
            users: user.id,
            post: post.id,
          });
          // const postLike = Post_Likes.create({
          //   users : user,
          //   post : post,
          // });

          try {
            await postLike.save();
            // await post.save();
            const allPost_like = await getRepository(Post_Likes).find({
              relations: ["users", "post"],
            });
            // console.log("allPost_Comment:", allPost_like);
            res.status(200).json({ message: `like 생성 성공`, data: postLike });
          } catch (e) {
            res.status(400).json({
              message: `like 생성이 실패하엿습니다`,
            });
          }
        } else {
          res.status(404).json({
            message: `해당 유저나 포스트가 존재하지 않습니다(id가잘못됨)`,
          });
        }
      }
    });
    // console.log(data.email);
  }
};
