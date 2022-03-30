import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Posts } from "../../models/entity/Post";
import { verifyToken } from "../../jwt/authChecker";

dotenv.config();
module.exports = async (req: Request | any, res: Response) => {
  const {
    postId,
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
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);

    const post: any = await getRepository(Posts).findOne({
      where: { id: postId },
      relations: ["users"],
    });

    console.log("find post:", post);
    if (post.users.email === verify.email) {
      (post.title = postTitle),
        (post.info = info),
        (post.total_time = totalTime),
        (post.body_Part = bodyPart),
        (post.difficult = difficult),
        (post.image = `${getImageUrl}/post/${postImage.filename}`),
        (post.created_At = created_At),
        (post.exerciseInfo = exerciseInfo),
        (post.post_comments = []),
        (post.post_likes = []);

      try {
        await post.save();
        // const allUsers = await getRepository(Posts).find();
        // console.log("allUsers:", allUsers);
        console.log("postSave:", post);
        res.status(200).json({ message: `post 수정 성공` });
      } catch (e) {
        console.log("post 수정 실패");
      }
    } else {
      res.status(404).json({ message: `글을 수정 할수 없습니다.` });
    }
  }
};
