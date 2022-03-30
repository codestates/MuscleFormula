import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
//import { Profile } from "../../models/entity/Profile";
import { Users } from "../../models/entity/User";
import { Ex_Records } from "../../models/entity/Ex_Records";
import { Record } from "../../models/entity/Record";

dotenv.config();
let today = new Date(Date.now());
let todaySring =
  today.getFullYear() +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  (today.getDate() + 2);
module.exports = async (req: Request, res: Response) => {
  const { user_id, record } = req.body;

  const user = await getRepository(Users).findOne({
    where: { id: user_id },
  });

  console.log("user :", user);
  if (!user) {
    return res.status(404).json({ message: "계정이 존재하지 않습니다" });
  } else {
    const makeExRecord = Record.create({
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
  const findrecord = await getRepository(Record).findOne({
    relations: ["users", "ex_record"],
    where: { users: user_id, created_at: todaySring },
  });
  let a: any = findrecord?.id;
  console.log(findrecord);
  if (findrecord) {
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
      const returndata = await getRepository(Record).find({
        where: { ex_record: a },
      });
      res.status(200).json({
        ex_record_id: a,
        Ex_Record: returndata,
      });
    }, 1000);

    // try {
    //   // console.log("저장되엇습니다", record);

    //   res.status(200).json({
    //     ex_record_id: a,
    //     Ex_Record: returndata,
    //   });
    // } catch (err) {
    //   console.log("에러가 발생하엿습니다", err);
    // }
  }
};
