import express from "express";

const createUserExRecord = require("../controllers/user_record/createUserExRecord");
const readUserExRecord = require("../controllers/user_record/readUserExRecord");
const editUserExRecord = require("../controllers/user_record/editUserExRecord");
const deleteUserExRecord = require("../controllers/user_record/deleteUserExRecord");
const recordRouter = express.Router();

recordRouter.post("/?date", createUserExRecord);
recordRouter.get("/?date", readUserExRecord);
recordRouter.put("/?date", editUserExRecord);

export default recordRouter;
