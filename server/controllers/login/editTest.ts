import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
import {Tests} from "../../models/entity/Test"
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { genre, count, time_record, user_id } = req.body;
  console.log("test Info : ",  genre, count, time_record)
  console.log("test Info : ",  req.body)

  const user = await getRepository(Users).findOne({
    where: { id:user_id },
  });

  if (user) {
    console.log("찾은 user :" ,user)
    const makeTest = new Tests();
    (makeTest.genre = req.body.genre),
    (makeTest.count = req.body.count),
    (makeTest.time_record = req.body.time_record),
    (makeTest.user = user);
    user.test = [...user.test, makeTest]

    try {
      await makeTest.save();
      // const allUsers = await getRepository(Users).find();
      // console.log("allUsers:", allUsers)
      let relationsTest = await getRepository(Users).find({
        relations: ["test"], 
        where: { id:user_id } 
      });
      console.log("relationsTest:", relationsTest)
      
      res.status(200).json({ message: `test만들기 성공` });


      // let newRelationtest = await getRepository(Users)
      //       .createQueryBuilder("test")
      //       .innerJoinAndSelect("test.user", "user")
      //       .getMany();

      // console.log("newRelationtest",newRelationtest)
    } catch (e) {
      console.log("test 만들기실패");
    }
  } else {
    res.status(404).json({ message: `이미 ?? 입니다` });
  }
};
