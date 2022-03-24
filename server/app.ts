import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import loginrouter from "./routers/login";
import userRouter from "./routers/users";
import { createConnection } from "typeorm";
import * as dotenv from "dotenv";
import postrouter from "./routers/posts";

createConnection()
  .then(async () => {
    console.log("mysql connected!!");
  })
  .catch((err) => console.log("mysql connected ERR:", err));

const app = express();

const corsOption = {
  Headers: { "content-type": "application/json" },
  origin: true,
  method: ["post", "get", "delete", "options", "put"],
  credentials: true,
};

app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/sign", loginrouter);
app.use("/users", userRouter);
app.use("/posts", postrouter);
app.get("/", (req, res) => {
  res.status(200).send("server is work!!");
});

export default app;
