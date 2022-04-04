import app from "./app";
import * as dotenv from "dotenv";
import { Socket } from "./node_modules/socket.io/dist/socket";
dotenv.config();

const http = require("http");
const server = http.createServer(app);
const io_s = require("socket.io");
const io = io_s(server);

io.on("connection", (socket) => {
  socket.on("join", ({ roomName: room, userName: user }) => {
    socket.join(room);
    io.to(room).emit("onConnect", `${user} 님이 입장했습니다.`);

    socket.on("onSend", (messageItem) => {
      io.to(room).emit("onReceive", messageItem);
    });

    socket.on("disconnect", () => {
      socket.leave(room);
      io.to(room).emit("onDisconnect", `${user} 님이 퇴장하셨습니다.`);
    });
  });
});
module.exports = server;
