import express from "express";
const postrouter = express.Router();

const deletePost = require("../controllers/post/deletePost");
const makePost = require("../controllers/post/makePost");
const editPost = require("../controllers/post/editPost");
const readAllPost = require("../controllers/post/readAllPost");
const detailPost = require("../controllers/post/detailPost");

const makePost_Comment = require("../controllers/post_comments/makePost_Comment");
const readAllPost_Comment = require("../controllers/post_comments/readPost_Comment");
const editPost_Comment = require("../controllers/post_comments/editPost_Comment");
const deletePost_Comment = require("../controllers/post_comments/deletePost_Comment");

const makePost_Like= require("../controllers/post_like/makePost_Like");
const readAllPost_Like= require("../controllers/post_like/readPost_Like");
const deletePost_Like= require("../controllers/post_like/deletePost_Like");


//post
postrouter.post("/", makePost);
postrouter.get("/", readAllPost);
postrouter.get("/detail", detailPost);
postrouter.put("/", editPost);
postrouter.delete("/delete", deletePost);

//Post_Comments
postrouter.post("/comment", makePost_Comment);
postrouter.get("/comment", readAllPost_Comment);
postrouter.put("/comment", editPost_Comment);
postrouter.delete("/comment", deletePost_Comment);

// Post_Likes
postrouter.post("/like", makePost_Like);
// postrouter.get("/like", readAllPost_Like);
postrouter.delete("/like", deletePost_Like);


export default postrouter;
