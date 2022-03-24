const emaillogin = require("../controllers/login/emailLogin");
const logout = require("../controllers/login/logout");
const google = require("../controllers/login/googleOauth");
const kakao = require("../controllers/login/kakaoOauth");

import express from "express";
const loginrouter = express.Router();

loginrouter.post("/login", emaillogin);
loginrouter.post("/logout", logout);
loginrouter.get("/googleoauth", google);
loginrouter.get("/kakaooauth", kakao);

export default loginrouter;
