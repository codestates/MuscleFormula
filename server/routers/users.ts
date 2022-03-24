const signup = require("../controllers/user/signup");
const login = require("../controllers/login/emailLogin");
const editUserInfo = require("../controllers/user/editUserInfo");
const deleteUserInfo = require("../controllers/user/deleteUserInfo");

const createUserExRecord = require("../controllers/user_record/createUserExRecord");
const readUserExRecord = require("../controllers/user_record/readUserExRecord");
const editUserExRecord = require("../controllers/user_record/editUserExRecord");
const deleteUserExRecord = require("../controllers/user_record/deleteUserExRecord");

import express from "express";
const userRouter = express.Router();

//유저정보
userRouter.post("/signup", signup);
userRouter.put("/editUserInfo", editUserInfo);
userRouter.delete("/deleteUserInfo", deleteUserInfo);

// user Records
userRouter.post("/record", createUserExRecord);
// userRouter.get("/record", readUserExRecord);
userRouter.put("/record", editUserExRecord);
// userRouter.delete("/record", deleteUserExRecord);

export default userRouter;
