const emaillogin = require("../controllers/login/emailLogin");
const signup = require("../controllers/login/signup");
const logout = require("../controllers/login/logout");
const google = require("../controllers/login/googleOauth");
const kakao = require("../controllers/login/kakaoOauth")

const editUserInfo = require("../controllers/login/editUserInfo")
const deleteUserInfo = require("../controllers/login/deleteUserInfo")


import express from "express";
const loginrouter = express.Router();

loginrouter.get("/login", emaillogin);
loginrouter.post("/signup", signup);
loginrouter.post("/logout", logout);
loginrouter.get("/googleoauth", google);
loginrouter.get("/kakaooauth", kakao);
loginrouter.put("/editUserInfo", editUserInfo);
loginrouter.delete("/deleteUserInfo", deleteUserInfo);


export default loginrouter;
