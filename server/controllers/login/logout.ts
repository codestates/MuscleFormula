import { Request, Response } from "express";

module.exports = async (req: Request, res: Response) => {
  if (req.headers.token || req.cookies.token) {
    delete req.headers.token;
    res.clearCookie("token");
    res.status(200).json({ message: "logout Success" });
  } else {
  }
};
