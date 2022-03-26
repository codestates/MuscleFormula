import express from "express";
const emaillogin = require("../controllers/login/emailLogin");
const logout = require("../controllers/login/logout");
const google = require("../controllers/login/googleOauth");
const kakao = require("../controllers/login/kakaoOauth");
const signup = require("../controllers/user/signup");
const readNick = require("../controllers/user/readNickname");
const loginrouter = express.Router();

loginrouter.post("/up", signup);
loginrouter.post("/in", emaillogin);
loginrouter.post("/out", logout);
loginrouter.get("/:nickname", readNick);
loginrouter.get("/googleoauth", google);
loginrouter.get("/kakaooauth", kakao);

export default loginrouter;
