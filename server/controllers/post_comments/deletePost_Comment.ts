import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Post_Comments } from "../../models/entity/Post_Comment";
const jwt = require("jsonwebtoken");
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const postCommentId = req.params.id;
  console.log(postCommentId);
  const auth = req.headers["authorization"];
  //console.log("delete body", req.body);
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
        const postCommnet: any = await getRepository(Post_Comments).findOne({
          where: { id: postCommentId },
          relations: ["users"],
        });
        console.log(postCommnet);
        // console.log(verify);

        if (postCommnet.users.email === data.email) {
          try {
            await postCommnet.remove();
            res.status(200).json({ message: `코멘트 삭제 성공` });
          } catch (e) {
            res.status(400).send({ message: "코멘트를 삭제할수 없습니다" });
          }
        } else {
          res.status(404).send({ message: "유저 정보가 일치하지 않습니다." });
        }
      }
    });
  }
};
