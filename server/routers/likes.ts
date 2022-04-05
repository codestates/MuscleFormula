import express from "express";

const likeRouter = express.Router();
//const postUpload = require("../images/multer");
const makePost_Like = require("../controllers/post_like/makePost_Like");
const readAllPost_Like = require("../controllers/post_like/readPost_Like");
const deletePost_Like = require("../controllers/post_like/deletePost_Like");

// Post_Likes
likeRouter.post("/:id", makePost_Like);
likeRouter.get("/", readAllPost_Like);
likeRouter.delete("/:id", deletePost_Like);

export default likeRouter;
