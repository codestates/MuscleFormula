import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";


dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { userId, 
    postTitle, 
    postImage, 
    info, 
    exerciseInfo, 
    totalTime, 
    difficult, 
    bodyPart,
    created_At } = req.body;
  console.log("makePost body : ", req.body);

  const user = await getRepository(Users).findOne({
    where: { id:userId },
  });

  if (user) {
    
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

    const created = Posts.create({
      title : postTitle,
      info : info,
      total_time : totalTime,
      body_Part : bodyPart,
      difficult : difficult,
      image : postImage,
      created_At : created_At,
      users : user,
      post_comments : [],
      post_likes : [],
    });

    try {
      await created.save();
      // await post.save();
      const allPosters = await getRepository(Posts).find({
        relations: ["post_comments","post_likes"]
      });
      console.log("allPosters:", allPosters);
      res.status(200).json({ message: `포스트 생성 성공` });
    } catch (e) {
      console.log("포스트 생성 실패", e);
    }
  } else {
    res.status(404).json({ message: `해당 유저가 존재하지 않습니다(id가잘못됨)` });
  }
};
