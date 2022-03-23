import express from "express";
const deletePost = require("../controllers/post/deletePost");
const makePost = require("../controllers/post/makePost");
const editPost = require("../controllers/post/editPost");
const readAllPost = require("../controllers/post/readAllPost");
const detailPost = require("../controllers/post/detailPost");
const postrouter = express.Router();

//post
postrouter.get("/", readAllPost);
postrouter.get("/detail", detailPost);
postrouter.post("/", makePost);
postrouter.put("/", editPost);
postrouter.delete("/delete", deletePost);

//Post_Likes
// postrouter.get("/detail", detailPost);
// postrouter.post("/", makePost);
// postrouter.put("/", editPost);
// postrouter.delete("/delete", deletePost);

export default postrouter;
