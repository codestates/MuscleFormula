const editUserInfo = require("../controllers/login/editUserInfo")
import express from "express";
const loginrouter = express.Router();

loginrouter.post("/edit", editUserInfo);
export default loginrouter;
