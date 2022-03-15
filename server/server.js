// 연결 테스트
const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./models");

// let server = "";
let localhost = "http://localhost:3000";

app.use(
  cors({
    origin: [`${localhost}`],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("연결됨?");
});

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

app.listen(8080, () => console.log("8080 server is running"));
