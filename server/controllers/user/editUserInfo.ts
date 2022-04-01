import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Users } from "../../models/entity/User";
const jwt = require("jsonwebtoken");
dotenv.config();

module.exports = async (req: Request | any, res: Response) => {
  const { email, password, nickname } = req.body;
  //console.log("signup Info : ", email, password, nickname);
  const auth = req.headers["authorization"];
  const files = req.file;

  //console.log("body", req.file);
  const userImage = files;
  const getImageUrl = "http://localhost:4000";
  if (!auth) {
    res.status(401).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    jwt.verify(
      token,
      process.env.ACCESS_SECRET,
      async (err: Error, data: any) => {
        if (err) {
          res.status(401).send({
            message: "엑세스토큰이 만료 되엇습니다.",
          });
        } else if (data) {
          const user: any = await getRepository(Users).findOne({
            where: { id: data.id },
          });
          if (user.email === data.email) {
            user.email = email;
            user.password = password;
            user.nickname = nickname;
            user.image = `${getImageUrl}/userimg/${userImage.filename}`;

            try {
              await user.save();
              const allUsers = await getRepository(Users).find();
              console.log("allUsers:", allUsers);
              res.status(200).json({
                message: `수정 성공`,
                Data: {
                  userId: user.id,
                  nickname: user.nickname,
                  image: user.image,
                },
              });
            } catch (e) {
              res.status(400).json({ message: `회원정보 수정 실패` });
            }
          } else {
            res.status(404).json({ message: `유저정보가 일치하지 않습니다` });
          }
        }
      }
    );
  }
};
