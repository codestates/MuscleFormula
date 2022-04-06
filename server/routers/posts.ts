import express from "express";
import { postUpload } from "../images/multer";
const postRouter = express.Router();

const deletePost = require("../controllers/post/deletePost");
const makePost = require("../controllers/post/makePost");
const editPost = require("../controllers/post/editPost");
const readAllPost = require("../controllers/post/readAllPost");
const detailPost = require("../controllers/post/detailPost");

//post
postRouter.post("/", postUpload.single("postImage"), makePost);
postRouter.get("/", readAllPost);
postRouter.get("/:id", detailPost);
postRouter.put("/:id", postUpload.single("postImage"), editPost);
postRouter.delete("/:id", deletePost);

export default postRouter;
