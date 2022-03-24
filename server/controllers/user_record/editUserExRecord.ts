import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
//import { Profile } from "../../models/entity/Profile";
import { Users } from "../../models/entity/User";
import { Records } from "../../models/entity/Record";
import { Ex_Records } from "../../models/entity/Ex_Record";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

module.exports = async (req: Request, res: Response) => {
  const { user_id, record } = req.body;
  const auth = req.headers["authorization"];

  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);
    const user = await getRepository(Users).findOne({
      relations: ["ex_records"],
      where: { id: user_id },
    });
<<<<<<< HEAD
    //console.log("유저2", findExRecord);
    if (!findExRecord) {
      const makeExRecord = Ex_Records.create({
        users: user_id,
        created_at: todaySring,
      });
      try {
        await makeExRecord.save();
        // console.log("??", makeExRecord);
      } catch (err) {
        console.log("err발생", err);
      }
    }
  }
  const findrecord = await getRepository(Ex_Records).findOne({
    relations: ["users", "records_"],
    where: { users: user_id, created_at: todaySring },
  });
  let findrecordId: any = findrecord?.id;
  // console.log(findrecord);
  if (findrecord) {
    record.forEach(async (item) => {
      const recode = await getRepository(Records).findOne({
        // relations: ["records_", "users"],
        where: { genre: item.genre },
      });
      if (!recode) {
        const createed = Records.create({
          records_: findrecordId,
          genre: item.genre,
          count: item.count,
          weight: item.weight,
          time_record: item.time_record,
        });
        await createed.save();
      } else {
        (recode.records_ = findrecordId),
          (recode.genre = item.genre),
          (recode.count = item.count),
          (recode.weight = item.weight),
          (recode.time_record = item.time_record),
          await recode.save();
      }
=======

    //console.log("유저입니다", user);
    if (!user) {
      return res.status(404).json({ message: "계정이 존재하지 않습니다" });
    }
    // } else if (user) {
    //   const findExRecord = await getRepository(Ex_Records).findOne({
    //     relations: ["records_", "users"],
    //     where: { users: user_id, created_at: todaySring },
    //   });
    //   //console.log("유저2", findExRecord);
    //   if (!findExRecord) {
    //     const makeExRecord = Ex_Records.create({
    //       users: user_id,
    //       created_at: todaySring,
    //     });
    //     try {
    //       await makeExRecord.save();
    //       // console.log("??", makeExRecord);
    //     } catch (err) {
    //       console.log("err발생", err);
    //     }
    //   }
    // }
    const findrecord = await getRepository(Ex_Records).findOne({
      relations: ["users", "records_"],
      where: { users: user_id, created_at: req.query.date },
>>>>>>> 33b29b60c1dca6ba1cd96ed220eb6db01862ca80
    });
    let findrecordId: any = findrecord?.id;
    console.log("핵심", findrecord?.users.email);
    console.log(verify.email);
    if (findrecord?.users.email === verify.email) {
      record.forEach(async (item) => {
        const recode = await getRepository(Records).findOne({
          // relations: ["records_", "users"],
          where: { genre: item.genre, records_: findrecordId },
        });
        if (!recode) {
          const createed = Records.create({
            records_: findrecordId,
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
        const returndata = await getRepository(Records).find({
          where: { records_: findrecordId },
        });
        res.status(200).json({
          ex_record_id: findrecordId,
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
      res.status(400).send({ message: "유저정보가 일치하지않습니다" });
    }
  }
};
