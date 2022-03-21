const signup = require("../controllers/user/signup");
const profile = require("../controllers/user/postWorkOut");
const editUserInfo = require("../controllers/user/editUserInfo");
const deleteUserInfo = require("../controllers/user/deleteUserInfo");

import express from "express";
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/Record", profile);
userRouter.put("/editUserInfo", editUserInfo);
userRouter.delete("/deleteUserInfo", deleteUserInfo);

export default userRouter;
