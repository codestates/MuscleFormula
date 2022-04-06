import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Ex_Records } from "../../models/entity/Ex_Records";
import { Record } from "../../models/entity/Record";
const jwt = require("jsonwebtoken");
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  console.log("server deletePost_exRecord in !!");

  const { genre } = req.body;
  console.log(req.body);
  const auth = req.headers["authorization"];
  //console.log("delete body", req.body);
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
        console.log(data.id);
        const findrecord = await getRepository(Record).findOne({
          relations: ["users", "ex_record"],
          where: { users: data.id, created_at: req.query.date },
        });
        // console.log(findrecord);
        console.log(req.query);
        const findrecordId = findrecord?.id;
        if (findrecord) {
          const userRecord: any = await getRepository(Ex_Records).findOne({
            where: { genre: genre, record: findrecordId },
            relations: ["record"],
          });
          console.log(userRecord);
          try {
            await userRecord.remove();
            res.status(200).json({ message: `운동기록 삭제 성공` });
          } catch (e) {
            res.status(400).send({ message: "운동기록을 삭제할수 없습니다" });
          }
        } else {
          res.status(404).send({ message: "유저 정보가 일치하지 않습니다." });
        }
      }
    });
  }
};
