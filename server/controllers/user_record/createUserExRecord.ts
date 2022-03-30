import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
//import { Profile } from "../../models/entity/Profile";
import { Users } from "../../models/entity/User";
import { Record } from "../../models/entity/Record";
import { Ex_Records } from "../../models/entity/Ex_Records";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

module.exports = async (req: Request, res: Response) => {
  const { userId, record } = req.body;
  console.log("레큐바디", req.body);
  console.log("req.cookies:", req.cookies);

  //console.log(todaySring);
  //   const user = await getRepository(Users).findOne({
  //     relations: ["profile"],
  //     where: { id: userId },
  //   });
  const auth = req.headers["authorization"];

  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);
    const user = await getRepository(Users).findOne({
      relations: ["ex_records"],
      where: { id: userId },
    });

    console.log("유저입니다", user?.email);
    console.log("토큰입니다", verify.email);
    if (!user) {
      return res.status(404).json({ message: "계정이 존재하지 않습니다" });
    } else if (user.email === verify.email) {
      const findExRecord = await getRepository(Record).findOne({
        relations: ["users", "ex_record"],
        where: { users: userId, created_at: todaySring },
      });
      if (!findExRecord) {
        const makeExRecord = Record.create({
          users: userId,
          created_at: todaySring,
        });
        try {
          await makeExRecord.save();
          console.log("메이크엑스레코드", makeExRecord);
        } catch (err) {
          console.log("err발생", err);
        }
      }
    }
    const findrecord = await getRepository(Record).findOne({
      relations: ["users", "ex_record"],
      where: { users: userId, created_at: todaySring },
    });
    let a: any = findrecord?.id;
    console.log(findrecord?.users.email);
    if (findrecord?.users.email === verify.email) {
      record.forEach(async (item) => {
        const createed = Ex_Records.create({
          record: a,
          genre: item.genre,
          count: item.count,
          weight: item.weight,
          time_record: item.time_record,
        });
        await createed.save();
      });
      setTimeout(async () => {
        const returndata = await getRepository(Ex_Records).find({
          where: { record: a },
        });
        res.status(200).json({
          RecordId: a,
          Records: returndata,
        });
      }, 1000);

      // try {
      //   // console.log("저장되엇습니다", record);

      //   res.status(200).json({
      //     ex_record_id: a,
      //     Records: returndata,
      //   });
      // } catch (err) {
      //   console.log("에러가 발생하엿습니다", err);
      // }
    } else {
      res.status(400).send({ message: "유저정보가 일치하지 않습니다" });
    }
  }
};
