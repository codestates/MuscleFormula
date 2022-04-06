import { Request, Response } from "express";

module.exports = async (req: Request, res: Response) => {
  console.log("server logOut in !!");

  if (req.headers.authorization || req.cookies.refreshToken) {
    delete req.headers.authorization;
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "logout Success" });
  } else {
  }
};
