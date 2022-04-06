import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
//import { Profile } from "../../models/entity/Profile";
import { Users } from "../../models/entity/User";
import { Ex_Records } from "../../models/entity/Ex_Records";
import { Record } from "../../models/entity/Record";
const jwt = require("jsonwebtoken"); // import는 안되네
dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

module.exports = async (req: Request, res: Response) => {
  console.log("server editUserExRecord in !!");

  const { record } = req.body;
  const auth = req.headers["authorization"];
  //console.log(req.query.date);
  //console.log(todaySring);

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
          relations: ["ex_records"],
          where: { id: data.id },
        });

        //console.log("유저입니다", user);
        if (!user) {
          return res.status(404).json({ message: "계정이 존재하지 않습니다" });
        }
        const findrecord = await getRepository(Record).findOne({
          relations: ["users", "ex_record"],
          where: { users: data.id, created_at: req.query.date },
        });

        console.log(findrecord?.created_at);
        // console.log(todaySring);
        let findrecordId: any = findrecord?.id;
        //console.log("핵심", findrecord?.users.email);
        //console.log(data.email);
        if (findrecord?.users.email === data.email) {
          record.forEach(async (item) => {
            const recode = await getRepository(Ex_Records).findOne({
              // relations: ["records_", "users"],
              where: { genre: item.genre, record: findrecordId },
            });
            if (!recode) {
              const createed = Ex_Records.create({
                record: findrecordId,
                genre: item.genre,
                count: item.count,
                weight: item.weight,
                time_record: item.time_record,
              });
              await createed.save();
            } else {
              (recode.genre = item.genre),
                (recode.count = item.count),
                (recode.weight = item.weight),
                (recode.time_record = item.time_record),
                await recode.save();
            }
          });
          setTimeout(async () => {
            const returndata = await getRepository(Ex_Records).find({
              where: { record: findrecordId },
            });
            res.status(200).json({
              recodId: findrecordId,
              Records: returndata,
            });
          }, 1000);
        } else {
          res.status(404).send({ message: "유저정보가 일치하지않습니다" });
        }
      }
    });
  }
};
