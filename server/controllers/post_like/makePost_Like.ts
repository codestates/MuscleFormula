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
    const user: any = await getRepository(Users).findOne({
      where: { id: userId },
    });
    const post = await getRepository(Posts).findOne({
      where: { id: postId },
    });

    if (user.email === verify.email && post) {
      const postLike = new Post_Likes();
      (postLike.users = user), (postLike.post = post);

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
        console.log("allPost_Comment:", allPost_like);
        res.status(200).json({ message: `like 생성 성공` });
      } catch (e) {
        console.log("like 생성 실패", e);
      }
    } else {
      res.status(404).json({
        message: `해당 유저나 포스트가 존재하지 않습니다(id가잘못됨)`,
      });
    }
  }
};
