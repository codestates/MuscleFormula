import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import loginrouter from "./routers/login";
import createConnection from "./models/index";
import * as dotenv from "dotenv";

const app = express();
createConnection();

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
