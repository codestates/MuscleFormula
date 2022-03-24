import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { verifyToken } from "../../jwt/authChecker";

dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { postId } = req.body;
  const auth = req.headers["authorization"];
  console.log("delete body", req.body);
  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);
    const post: any = await getRepository(Posts).findOne({
      where: { id: postId },
      relations: ["users"],
    });
    //console.log(data);
    //console.log(post?.users.email);
    if (post?.users.email === verify?.email) {
      try {
        await post.remove();
        res.status(200).json({ message: `포스트 삭제 성공` });
      } catch (e) {
        console.log("포스트 삭제 실패");
      }
    } else {
      res.status(400).send({ message: "글쓴이가 아닙니다." });
    }
  }
};
