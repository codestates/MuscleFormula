import app from "./app";
import dotenv from "dotenv";
dotenv.config();

// const io = require("socket.io");
// const socket = io();

const http = require("http");
const PORT = process.env.PORT;

const server = require("./socket");

console.log("port:", PORT);
server.listen(PORT, () => {
  console.log(`port:${PORT} server is on!`);
});
