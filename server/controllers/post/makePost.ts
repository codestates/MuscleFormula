import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
import { verifyToken } from "../../jwt/authChecker";
import { Record } from "../../models/entity/Record";
dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// date 속성으로 넣으면날짜가 하루 -1 됨 ㅋㅋㅋ
module.exports = async (req: Request | any, res: Response) => {
  //console.log(req.cookies);
  const auth = req.headers["authorization"];
  //console.log(auth);
  const {
    userId,
    postTitle,
    info,
    totalTime,
    difficult,
    bodyPart,
    exerciseInfo,
  } = req.body;
  const postImage = req.file;
  const getImageUrl = "http://localhost:4000";
  console.log("makePost body : ", req.body);
  //console.log("todaySring body : ", todaySring);

  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);

    //console.log(data);
    const user = await getRepository(Users).findOne({
      where: { id: userId },
    });
    const exInfo = await getRepository(Record).findOne({
      where: { id: exerciseInfo },
      relations: ["ex_record"],
    });
    //console.log("exInfo", exInfo);

    if (user?.email === verify.email) {
      const created = Posts.create({
        title: postTitle,
        info: info,
        total_time: totalTime,
        body_Part: bodyPart,
        difficult: difficult,
        image: `${getImageUrl}/post/${postImage.filename}`,
        created_At: todaySring,
        users: user,
        exerciseInfo: exInfo,
        post_comments: [],
        post_likes: [],
      });

      try {
        await created.save();
        // await post.save();
        const allPosters = await getRepository(Posts).find({
          relations: ["users", "post_comments", "post_likes", "exerciseInfo"],
        });
        //console.log("allPosters:", allPosters);
        res.status(200).json({ message: `포스트 생성 성공`, data: created });
      } catch (e) {
        console.log("포스트 생성 실패", e);
      }
    } else {
      res
        .status(404)
        .json({ message: `해당 유저가 존재하지 않습니다(id가잘못됨)` });
    }
  }
};
