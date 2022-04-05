import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { Post_Comments } from "../../models/entity/Post_Comment";
const jwt = require("jsonwebtoken");
dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
module.exports = async (req: Request, res: Response) => {
  console.log("server makePost_Comment in !!");

  const { comment } = req.body;
  const postId = req.params.id;
  const auth = req.headers["authorization"];
  console.log("makePost_Commets : ", req.body);
  console.log("postId : ", postId);
  console.log("auth : ", auth);

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
        //console.log(user);
        const post = await getRepository(Posts).findOne({
          where: { id: postId },
        });
        // console.log(verify.email);
        if (user.email === data.email) {
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
            //const allPost_Comment = await getRepository(Post_Comments).find({
            //relations: ["users", "post"],
            // });
            // console.log("allPost_Comment:", allPost_Comment);
            console.log(created);
            const allComment: any = await getRepository(Post_Comments).find({
              relations: ["users"],
            });
            console.log("allComment :", allComment);
            res.status(200).json({
              message: `코멘트 생성 성공`,
              data: {
                id: created.id,
                commnet: created.comment,
                created_At: created.created_At,
                users: {
                  id: created.users.id,
                  email: created.users.email,
                  nickname: created.users.nickname,
                  image: created.users.image,
                },
                post: created.post,
              },
            });
          } catch (e) {
            res.status(400).json({ message: `코멘트를 생성 할수 없습니다.` });
          }
        } else {
          res
            .status(404)
            .json({ message: `해당 유저가 존재하지 않습니다(id가잘못됨)` });
        }
      }
    });
  }
};
