import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
const jwt = require("jsonwebtoken");
import { Users } from "../../models/entity/User";
import { Record } from "../../models/entity/Record";
import { Posts } from "../../models/entity/Post";
import { Ex_Records } from "../../models/entity/Ex_Records";

dotenv.config();
let yesterdays = new Date(Date.now());
let today = new Date(Date.now());
let test = today.getDate() - 1;
if (test === 0) {
  yesterdays.setDate(yesterdays.getDate() - 1);
} else {
  yesterdays.setDate(yesterdays.getDate());
}
let yesterday =
  yesterdays.getFullYear() +
  "-" +
  (yesterdays.getMonth() + 1) +
  "-" +
  (yesterdays.getDate() - 1);
//console.log(yesterday);
let findtoday =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//console.log(findtoday);

module.exports = async (req: Request, res: Response) => {
  console.log("server readMypage in !!");

  const auth = req.headers["authorization"];
  //const params = req.params;
  // console.log(params);

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
        const allInfo: any = await getRepository(Posts).find({
          relations: ["users", "post_comments", "post_likes"],
          where: { users: data.id },
          order: {
            id: "DESC",
          },
        });
        //console.log("mypage", allInfo);
        const findLastTime = await getRepository(Record).findOne({
          relations: ["ex_record"],
          where: { users: data.id, created_at: yesterday },
        });
        //console.log("???", findLastTime);
        const findTodayTime = await getRepository(Record).findOne({
          relations: ["ex_record"],
          where: { users: data.id, created_at: findtoday },
        });
        const findBestTime = await getRepository(Record).find({
          relations: ["ex_record"],
          where: { users: data.id },
        });

        const maxValue = findBestTime.map((el) => {
          let sum = 0;
          el.ex_record.forEach((item) => {
            sum += item.time_record;
          });

          return sum;
        });
        let sum = Math.max(...maxValue);
        //console.log("123", findTodayTime);
        const crawlLastTime = findLastTime?.ex_record.map((el) => {
          const dateData = el.time_record;
          return Number(dateData);
        });
        const crawltodayTime = findTodayTime?.ex_record.map((el) => {
          const dateData = el.time_record;
          return Number(dateData);
        });

        // console.log(crawlBestTime.);
        //console.log("123", findBestTime);
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
        const bestTime = showtime(sum);
        console.log(bestTime);

        function showtime(item) {
          let hour = Math.floor(item / 3600);
          let min = Math.floor(item / 60) - hour * 60;
          let sec = Math.floor(item % 60);
          let output: string =
            hour.toString().padStart(2, "0") +
            ":" +
            min.toString().padStart(2, "0") +
            ":" +
            sec.toString().padStart(2, "0");
          //console.log(output);
          if (output === "NaN:NaN:NaN") {
            return "운동기록이 존재 하지않습니다.";
          } else {
            return output;
          }
        }
        //console.log("a", allInfo);
        //console.log("b", data);
        if (allInfo) {
          const createed = allInfo.map((item) => {
            const data = {
              postId: item.id,
              postTitle: item.title,
              info: item.info,
              postImage: item.image,
              user: {
                userId: item.users.id,
                nickname: item.users.nickname,
                image: item.users.image,
              },
              bodyPart: item.body_Part,
              difficult: item.difficult,
              totalTime: item.total_time,
              //totalcomments찾아주세요 임시로 아무 값 넣었어여
              total_comments: item.post_comments.length,
              total_Likes: item.post_likes.length,
              created_At: item.created_At,
            };
            return data;
          });
          const mypageData = {
            users: {
              image: allInfo.image,
              exerciseInfo: {
                LastTime: lastTime,
                todayTime: todayTime,
                bestTime: bestTime,
              },
            },
            myPost: createed,
          };
          res.status(200).json({
            mypageData: mypageData,
          });
        } else {
          res.status(404).send({
            message: "유저가 존재하지 않거나 유저정보가 일치하지 않습니다.",
          });
        }
      } else {
        res.status(400).json({ message: "잘못된정보입니다" });
      }
    });
  }
};
