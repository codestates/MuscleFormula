import express from "express";
const deletePost = require("../controllers/post/deletePost");
const makePost = require("../controllers/post/makePost");
const editPost = require("../controllers/post/editPost");
const readPost = require("../controllers/post/readPost");
const detailPost = require("../controllers/post/detailPost");
const postrouter = express.Router();

postrouter.get("/", readPost);
postrouter.get("/detail", detailPost);
postrouter.post("/", makePost);
postrouter.put("/", editPost);
postrouter.delete("/delete", deletePost);
export default postrouter;
