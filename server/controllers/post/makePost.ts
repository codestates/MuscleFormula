import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import { Posts } from "../../models/entity/Post";
const jwt = require("jsonwebtoken");
import { Record } from "../../models/entity/Record";
dotenv.config();

// date 속성으로 넣으면날짜가 하루 -1 됨 ㅋㅋㅋ

module.exports = async (req: Request | any, res: Response) => {
  console.log("server makePost in !!");
  let time = new Date();
  const secToTime = (time) => {
    let years = time.getFullYear();
    let month = time.getMonth() + 1;
    let days = time.getDate();
    month = month < 10 ? "0" + month : month;
    days = days < 10 ? "0" + days : days;

    return years + "-" + month + "-" + days;
  };
  console.log(secToTime(time));
  const auth = req.headers["authorization"];
  const { postTitle, info, totalTime, difficult, bodyPart, exerciseInfo } =
    req.body;
  let postImage = req.file;
  if (typeof req.file === "undefined") {
    postImage = {
      filename: "img_post_default.png",
    };
  }
  const getImageUrl = process.env.SERVER_URL;

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
        const user = await getRepository(Users).findOne({
          where: { id: data.id },
        });
        const exInfo = await getRepository(Record).findOne({
          where: { id: exerciseInfo },
          relations: ["ex_record"],
        });
        console.log("exInfo", exInfo);
        console.log("userEmail", user?.email);
        console.log("dataEmail", data.email);

        if (user?.email === data.email) {
          const created = Posts.create({
            title: postTitle,
            info: info,
            total_time: totalTime,
            body_Part: bodyPart,
            difficult: difficult,
            image: `${getImageUrl}/postimg/${postImage.filename}`,
            created_At: secToTime(time),
            users: {
              id: user?.id,
              email: user?.email,
              nickname: user?.nickname,
              image: user?.image,
            },
            exerciseInfo: exInfo,
            post_comments: [],
            post_likes: [],
          });

          try {
            await created.save();
            // await post.save();
            const allPosters = await getRepository(Posts).find({
              relations: [
                "users",
                "post_comments",
                "post_likes",
                "exerciseInfo",
              ],
            });

            //console.log("allPosters:", allPosters);
            res
              .status(200)
              .json({ message: `포스트 생성 성공`, data: created });
          } catch (e) {
            res.status(400).json({ message: `포스트를 생성할수없습니다` });
          }
        } else {
          res
            .status(404)
            .json({ message: `해당 유저가 존재하지 않습니다(id가잘못됨)` });
        }
      }

      //console.log(data);
    });
  }
};
