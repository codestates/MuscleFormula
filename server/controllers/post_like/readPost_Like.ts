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
          where: { users: data.id },
        });

        //console.log(allpost);
        //   const dataset = await allpost.map((item) => {
        //     const returnData = {
        //       users: {
        //         userId: item.users.id,
        //         nickname: item.users.nickname,
        //         image: item.users.image,
        //       },
        //       postId: item.id,
        //       info: item.info,
        //       postImage: item.image,
        //       bodyPart: item.body_Part,
        //       difficult: item.difficult,
        //       totalTime: item.total_time,
        //       total_Likes: item.post_likes.length,
        //       total_comments: item.post_comments.length,
        //     };
        //     //console.log("returnData", returnData);
        //     return returnData;
        //   });
        //   console.log(dataset);
        //   return dataset;

        //console.log(finddata);

        //    res.status(200).json({
        //        data:{
        //            users:finddata.users.id
        //        }
        //    })
        // console.log(likePost);
        // const createed = likePost.map((item) => {
        //   const data = {
        //     user: {
        //       userId: item.users.id,
        //       email: item.users.email,
        //       nickname: item.users.nickname,
        //       image: item.users.image,
        //     },
        //     postId: item.post.id,
        //     postTitle: item.post.title,
        //     info: item.post.info,
        //     postImage: item.post.image,
        //     bodyPart: item.post.body_Part,
        //     difficult: item.post.difficult,
        //     totalTime: item.post.total_time,
        //     //totalcomments찾아주세요 임시로 아무 값 넣었어여
        //     created_At: item.post.created_At,
        //   };
        //   return data;
        // });
        // res.status(200).json(createed);
      }
    });
  }
};
