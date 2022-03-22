import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Posts } from "../../models/entity/Post";


dotenv.config();
module.exports = async (req: Request, res: Response) => {
  const { 
    postId, 
    postTitle, 
    postImage, 
    info, 
    exerciseInfo, 
    totalTime, 
    difficult, 
    bodyPart,
    created_At 
  } = req.body;

  console.log("editPost body : ", req.body);

  const post = await getRepository(Posts).findOne({
    where: { id:postId },
  });
  console.log("find post:",post)
  if (post) {
    (post.title = postTitle),
    (post.info = info),
    (post.total_time = totalTime),
    (post.body_Part = bodyPart),
    (post.difficult = difficult),
    (post.image = postImage),
    (post.created_At = created_At),
    (post.post_comments = []),
    (post.post_likes = []);

    try {
      await post.save();
      // const allUsers = await getRepository(Posts).find();
      // console.log("allUsers:", allUsers);
      console.log("postSave:", post)
      res.status(200).json({ message: `post 수정 성공` });
    } catch (e) {
      console.log("post 수정 실패");
    }
  } else {
    res.status(404).json({ message: `이미 존재하는 이메일 입니다` });
  }




};