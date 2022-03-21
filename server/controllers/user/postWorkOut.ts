import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Profile } from "../../models/entity/Profile";
import { Users } from "../../models/entity/User";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { genre, count, weight, time_record, created_At, user_id } = req.body;

  //   const user = await getRepository(Users).findOne({
  //     relations: ["profile"],
  //     where: { id: user_id },
  //   });
  const user = await getRepository(Users).findOne({
    id: user_id,
  });
  console.log(user);
  if (user) {
    const created = Profile.create({
      genre: genre,
      count: count,
      weight: weight,
      time_record: time_record,
      created_At: created_At,
      user: user_id,
    });
    try {
      created.save();
      const finduser = await getRepository(Users).findOne({
        relations: ["profile"],
        where: { id: user_id },
      });
      res.status(200).send("good");
      console.log(finduser);
    } catch (err) {
      console.log(err);
    }
  }
};
