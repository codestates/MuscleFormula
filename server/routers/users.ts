const signup = require("../controllers/user/signup");
const profile = require("../controllers/user_record/userExRecord");
const editUserInfo = require("../controllers/user/editUserInfo");
const deleteUserInfo = require("../controllers/user/deleteUserInfo");

import express from "express";
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/record", profile);
userRouter.put("/editUserInfo", editUserInfo);
userRouter.delete("/deleteUserInfo", deleteUserInfo);

export default userRouter;
