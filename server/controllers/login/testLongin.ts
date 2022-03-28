import { Request, Response } from "express";

module.exports = (req: Request, res: Response) => {
  console.log("되나>?");
  // res.send("확인");
  res.redirect("http://localhost:3000/main");
};
