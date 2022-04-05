import express from "express";
import { userUpload } from "../images/multer";
//const userUpload = require("../images/multer");
const editUserInfo = require("../controllers/user/editUserInfo");
const deleteUserInfo = require("../controllers/user/deleteUserInfo");
const readMypage = require("../controllers/user/readMypage");

const userRouter = express.Router();

// user Records

// userRouter.delete("/record", deleteUserExRecord);
userRouter.get("/", readMypage);
userRouter.put("/", userUpload.single("userImage"), editUserInfo);
userRouter.delete("/", deleteUserInfo);

export default userRouter;
