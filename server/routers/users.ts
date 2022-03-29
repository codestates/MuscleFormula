import express from "express";
const userUpload = require("../images/multer");
const editUserInfo = require("../controllers/user/editUserInfo");
//const editUserImage = require("../controllers/user/editUserImage");
const deleteUserInfo = require("../controllers/user/deleteUserInfo");
const readMypage = require("../controllers/user/readMypage");
const createUserExRecord = require("../controllers/user_record/createUserExRecord");
const readUserExRecord = require("../controllers/user_record/readUserExRecord");
const editUserExRecord = require("../controllers/user_record/editUserExRecord");
const deleteUserExRecord = require("../controllers/user_record/deleteUserExRecord");

const userRouter = express.Router();

// user nickname is

userRouter.get("/mypage", readMypage);
userRouter.put("/", userUpload.single("userImage"), editUserInfo);
//userRouter.put("/userImage", upload.single("userImage"), editUserImage);
userRouter.delete("/", deleteUserInfo);
// user Records
userRouter.post("/record", createUserExRecord);
// userRouter.get("/record", readUserExRecord);
userRouter.put("/record", editUserExRecord);
// userRouter.delete("/record", deleteUserExRecord);

export default userRouter;
