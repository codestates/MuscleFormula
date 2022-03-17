const login = require("../controllers/login/emailLogin");
import express from "express";
const loginrouter = express.Router();

loginrouter.get("/test", login);

export default loginrouter;
