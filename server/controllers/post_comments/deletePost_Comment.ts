import { Request, Response } from "express";
import { getRepository } from "typeorm";
import dotenv from "dotenv";
import { Post_Comments } from "../../models/entity/Post_Comment";
import { verifyToken } from "../../jwt/authChecker";
dotenv.config();

module.exports = async (req: Request, res: Response) => {
  const { postCommentId } = req.body;
  const auth = req.headers["authorization"];
  //console.log("delete body", req.body);
  if (!auth) {
    res.status(400).send({ messege: "엑세스 토큰이 존재하지 않습니다." });
  } else {
    const token: any = auth?.split(" ")[1];
    const verify = await verifyToken(token);

    const postCommnet: any = await getRepository(Post_Comments).findOne({
      where: { id: postCommentId },
      relations: ["users"],
    });
    // console.log(postCommnet);
    // console.log(verify);

    if (postCommnet.users.email === verify.email) {
      try {
        await postCommnet.remove();
        res.status(200).json({ message: `코멘트 삭제 성공` });
      } catch (e) {
        console.log("코멘트 삭제 실패");
      }
    } else {
      res.status(400).send({ message: "유저 정보가 일치하지 않습니다." });
    }
  }
};
