import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
const jwt = require("jsonwebtoken");

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("server deletePost in !!");

  const postId = req.params.id;
  const auth = req.headers["authorization"];
  console.log("delete body", req.body);
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
          relations: ["users"],
        });
        //console.log(data);
        //console.log(post?.users.email);
        if (post?.users.email === data?.email) {
          try {
            await post.remove();
            res.status(200).json({ message: `포스트 삭제 성공` });
          } catch (e) {
            res.status(400).send({ message: "포스트를 삭제할수 없습니다" });
          }
        } else {
          res.status(404).send({ message: "글쓴이가 아닙니다." });
        }
      }
    });
  }
};
