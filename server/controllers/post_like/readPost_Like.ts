import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { Post_Likes } from "../../models/entity/Post_Like";
const jwt = require("jsonwebtoken");
dotenv.config();
module.exports = async (req: Request, res: Response) => {
  const userId = req.params.id;
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
        // const allpost: any = await getRepository(Posts).find({
        //   relations: ["users", "post_comments", "post_likes"],
        // });

        const likePost: any = await getRepository(Post_Likes).find({
          relations: ["users", "post"],
          order: {
            id: "DESC",
          },
          where: { users: data.id },
        });
        console.log(likePost);
        const likePostId = likePost.map((item) => {
          const data = {
            postId: item.post.id,
          };
          return data;
        });
        //console.log(likePostId);

        try {
          const bigData = await Promise.all(
            likePostId.map(async (item) => {
              const postData = await getRepository(Posts).find({
                relations: ["post_comments", "post_likes", "users"],
                where: { id: item.postId },
              });
              return postData;
            })
          );
          const likeData = bigData.flat();
          console.log(likeData);
          const createed = likeData.map((item) => {
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
          res.status(200).json(createed);
        } catch (e) {
          console.log(e);
          res.status(500);
        }
      } else {
        res.status(401).json({ message: "유저정보를 확인할수 없습니다." });
      }
    });
  }
};
