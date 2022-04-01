import express from "express";
const commentRouter = express.Router();
const makePost_Comment = require("../controllers/post_comments/makePost_Comment");
const readAllPost_Comment = require("../controllers/post_comments/readPost_Comment");
const editPost_Comment = require("../controllers/post_comments/editPost_Comment");
const deletePost_Comment = require("../controllers/post_comments/deletePost_Comment");

commentRouter.post("/:id", makePost_Comment);
commentRouter.get("/", readAllPost_Comment);
commentRouter.put("/:id", editPost_Comment);
commentRouter.delete("/:id", deletePost_Comment);

export default commentRouter;
