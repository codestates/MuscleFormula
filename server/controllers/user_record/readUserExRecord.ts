import { Request, Response } from "express";
import { getRepository } from "typeorm";
const jwt = require("jsonwebtoken"); // import는 안되네
import dotenv from "dotenv";
//import { Profile } from "../../models/entity/Profile";
import { Users } from "../../models/entity/User";
import { Record } from "../../models/entity/Record";
import { Ex_Records } from "../../models/entity/Ex_Records";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("server readUserExRecord in !!");

  const auth = req.headers["authorization"];
  const date = req.query.date;
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
        const userInfo = await getRepository(Users).findOne({
          where: { email: data.email },
        });
        const exerciseInfo = await getRepository(Record).findOne({
          relations: ["ex_record"],
          where: { created_at: date, users: userInfo?.id },
        });
        //console.log(exerciseInfo);
        if (!exerciseInfo) {
          res.status(404).json({ message: "운동기록을 찾을수없습니다." });
        } else {
          const createed = exerciseInfo.ex_record.map((item) => {
            const data = {
              genre: item.genre,
              weight: item.weight,
              count: item.count,
              time_record: item.time_record,
            };
            return data;
          });
          const data = {
            recordId: exerciseInfo.id,
            exerciseInfo: createed,
          };

          try {
            res.status(200).json({ data });
          } catch {
            res
              .status(400)
              .json({ message: "운동기록을 불러오는데 실패하엿습니다." });
          }
        }
      }
    });
  }
};
