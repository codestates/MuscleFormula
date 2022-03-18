import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import loginrouter from "./routers/login";
import { createConnection } from "typeorm";
import * as dotenv from "dotenv";

createConnection()
  .then(async () => {
    console.log("mysql connected!!");
  })
  .catch((err) => console.log("에러요:", err));

const app = express();

const corsOption = {
  Header: { "content-type": "application/json" },
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
app.use("/login", loginrouter);
app.get("/", (req, res) => {
  res.status(200).send("server is work!!");
});

export default app;
