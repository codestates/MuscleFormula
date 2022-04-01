import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
const jwt = require("jsonwebtoken");
import { Users } from "../../models/entity/User";
import { Record } from "../../models/entity/Record";

dotenv.config();
let today = new Date(Date.now());
let yesterday =
  today.getFullYear() +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  (today.getDate() - 1);
let findtoday =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

module.exports = async (req: Request, res: Response) => {
  const auth = req.headers["authorization"];

  if (!auth) {
    res.status(401).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token = auth?.split(" ")[1];
    //console.log(token);
    jwt.verify(token, process.env.ACCESS_SECRET, async (err, data) => {
      console.log(data);
      if (err) {
        res.status(401).send({
          message: "엑세스토큰이 만료 되엇습니다.",
        });
      } else if (data) {
        //console.log("data임", data);
        //console.log(data);
        const allInfo = await getRepository(Users).findOne({
          relations: ["posts"],
          where: { email: data.email },
        });
        //console.log("mypage", allInfo);
        const findLastTime = await getRepository(Record).findOne({
          relations: ["ex_record"],
          where: { users: allInfo?.id, created_at: yesterday },
        });
        // console.log("???", findLastTime);
        const findTodayTime = await getRepository(Record).findOne({
          relations: ["ex_record"],
          where: { users: allInfo?.id, created_at: findtoday },
        });

        //console.log("123", findTodayTime);
        const crawlLastTime = findLastTime?.ex_record.map((el) => {
          const data = el.time_record;
          return Number(data);
        });
        const crawltodayTime = findTodayTime?.ex_record.map((el) => {
          const data = el.time_record;
          return Number(data);
        });
        //console.log(crawltodayTime);
        const translateLastTime: any = crawlLastTime?.reduce(
          (item1, item2) => item1 + item2,
          0
        );
        const translatetodayTime: any = crawltodayTime?.reduce(
          (item1, item2) => item1 + item2,
          0
        );
        const lastTime = showtime(translateLastTime);
        const todayTime = showtime(translatetodayTime);
        //console.log(lastTime);
        function showtime(item) {
          let hour = Math.floor(item / 3600);
          let min = Math.floor(item / 60) - hour * 60;
          let sec = Math.floor(item % 60);
          let output =
            hour.toString().padStart(2, "0") +
            ":" +
            min.toString().padStart(2, "0") +
            ":" +
            sec.toString().padStart(2, "0");
          return output;
        }
        if (allInfo) {
          const createed = allInfo.posts.map((item) => {
            const data = {
              postId: item.id,
              postTitle: item.title,
              postImage: item.image,
              user: {
                userId: allInfo.id,
                nickname: allInfo.nickname,
                image: allInfo.image,
              },
              bodyPart: item.body_Part,
              difficult: item.difficult,
              totalTime: item.total_time,
              totalLikes: item.total_Likes,
            };
            return data;
          });
          const mypageData = {
            users: {
              image: allInfo.image,
              exerciseInfo: {
                LastTime: lastTime,
                todayTime: todayTime,
                bestTime: "test",
              },
            },
            myPost: createed,
          };
          res.status(200).json({
            mypageData: mypageData,
          });
        } else {
          res.status(404).send({ message: "유저정보가 일치하지않습니다" });
        }
      } else {
        res.status(400).json({ message: "잘못된정보입니다" });
      }
    });
  }
};
