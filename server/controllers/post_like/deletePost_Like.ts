import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { Post_Likes } from "../../models/entity/Post_Like";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();
module.exports = async (req: Request, res: Response) => {
  const { userId, postId } = req.body;
  console.log("makePost_Likes: ", req.body);
  const auth = req.headers["authorization"];
  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);
    // console.log(verify.email);
    const user = await getRepository(Users).findOne({
      where: { id: userId },
    });
    const post = await getRepository(Posts).findOne({
      where: { id: postId },
    });

    const postLike: any = await getRepository(Post_Likes).findOne({
      where: { post: post, users: user },
      relations: ["users"],
    });

    console.log("postLike:", postLike);
    //console.log("user:", user);
    //console.log("post:", post);

    if (postLike.users.email === verify.email) {
      try {
        await postLike.remove();
        res.status(200).json({ message: `like 삭제 성공` });
      } catch (e) {
        res.status(400).send({ message: "like 삭제 실패" });
      }
    } else {
      res.status(400).send({ message: "like가 존재하지 않음 (id확인)" });
    }
  }
};
