import express from "express";
const generateNewAccessToken = require("../jwt/generateNewAccessToken");
const emaillogin = require("../controllers/login/emailLogin");
const logout = require("../controllers/login/logout");
const google = require("../controllers/login/googleOauth");
const kakao = require("../controllers/login/kakaoOauth");
const signup = require("../controllers/user/signup");
const readNickname = require("../controllers/user/readNicks");

const test = require("../controllers/login/testLongin");

const loginrouter = express.Router();

loginrouter.post("/up", signup);
loginrouter.post("/in", emaillogin);
loginrouter.post("/out", logout);
loginrouter.post("/googleoauth", google);
loginrouter.post("/kakaooauth", kakao);
loginrouter.get("/test", test);
loginrouter.post("/nickname", readNickname);
loginrouter.get("/newtoken", generateNewAccessToken);
export default loginrouter;
