import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Posts } from "../../models/entity/Post";
const jwt = require("jsonwebtoken");

dotenv.config();
module.exports = async (req: Request | any, res: Response) => {
  console.log("server editPost in !!");

  const postId = req.params.id;
  const {
    postTitle,
    info,
    exerciseInfo,
    totalTime,
    difficult,
    bodyPart,
    created_At,
  } = req.body;
  const auth = req.headers["authorization"];
  const postImage = req.file;
  const getImageUrl = "http://localhost:4000";
  console.log("editPost body : ", req.body);
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
        const post: any = await getRepository(Posts).findOne({
          where: { id: postId },
          relations: ["users", "exerciseInfo"],
        });
        console.log(data);
        if (post.users.email === data.email || data.email === "admin") {
          if (!postImage) {
            (post.title = postTitle),
              (post.info = info),
              (post.total_time = totalTime),
              (post.body_Part = bodyPart),
              (post.difficult = difficult),
              (post.created_At = created_At),
              (post.exerciseInfo = exerciseInfo);

            try {
              await post.save();
              // const allUsers = await getRepository(Posts).find();
              // console.log("allUsers:", allUsers);
              //onsole.log("postSave:", post);
              res.status(200).json({ message: `post 수정 성공` });
            } catch (e) {
              console.log(e);
              res.status(404).json({ message: `글을 수정 할수 없습니다.` });
            }
          } else {
            (post.title = postTitle),
              (post.info = info),
              (post.total_time = totalTime),
              (post.body_Part = bodyPart),
              (post.difficult = difficult),
              (post.image = `${getImageUrl}/postimg/${postImage.filename}`),
              (post.created_At = created_At),
              (post.exerciseInfo = exerciseInfo);

            try {
              await post.save();
              // const allUsers = await getRepository(Posts).find();
              // console.log("allUsers:", allUsers);
              console.log("postSave:", post);
              res.status(200).json({ message: `post 수정 성공` });
            } catch (e) {
              res.status(404).json({ message: `글을 수정 할수 없습니다.` });
            }
          }
        } else {
          res.send(401).json({ message: "유저정보가 일치 하지 않습니다" });
        }
      } else {
        res.send(401).json({ message: "토큰이 유효하지 않습니다." });
      }
    });
  }
};
